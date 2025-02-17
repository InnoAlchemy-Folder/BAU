<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Include the database configuration file
include 'config.php';
$data = json_decode(file_get_contents('php://input'), true);
// Include QR code library
require('vendor/autoload.php'); // Composer's autoload

use Endroid\QrCode\QrCode;
use Endroid\QrCode\Writer\PngWriter;

// Check if POST data is received
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = isset($data['username']) ? $data['username'] : '';
    $seller = isset($data['seller']) ? $data['seller'] : '';
    $phone = isset($data['phone']) ? $data['phone'] : '';
    $quantity = isset($data['quantity']) ? intval($data['quantity']) : 1; // Default to 1 if not provided
    $eventId = isset($data['event_id']) ? intval($data['event_id']) : 0; // Default to 0 if not provided

    if (empty($username) || empty($seller) || empty($phone) || empty($eventId)) {
        echo json_encode(["error" => "Username, seller, phone, and event ID are required."]);
        exit;
    }

    // Database connection
    $pdo = new PDO(DB_DSN, DB_USER, DB_PASS); // Update DB_DSN, DB_USER, and DB_PASS in db_config.php

    // Check if the seller exists in the users table
    $stmt = $pdo->prepare("SELECT COUNT(*) FROM users WHERE id = ?");
    $stmt->execute([$seller]);
    $userExists = $stmt->fetchColumn();

    if (!$userExists) {
        echo json_encode(["error" => "Seller does not exist."]);
        exit;
    }

    // Check if the event exists in the events table
    $stmt = $pdo->prepare("SELECT COUNT(*) FROM events WHERE id = ?");
    $stmt->execute([$eventId]);
    $eventExists = $stmt->fetchColumn();


    if (!$eventExists) {
        echo json_encode(["error" => "Event does not exist."]);
        exit;
    }

    // Insert ticket details into the database
    $stmt = $pdo->prepare("INSERT INTO tickets (username, seller, phone, quantity, event_id, created_at) VALUES (?, ?, ?, ?, ?, NOW())");
    $stmt->execute([$username, $seller, $phone, $quantity, $eventId]);
    $ticketId = $pdo->lastInsertId();

    // Generate QR codes for the tickets
    for ($i = 0; $i < $quantity; $i++) {
        // Generate a unique random string for the QR code
        $uniqueCode = bin2hex(random_bytes(16)); // 32-character hex string
        $qrCodeText = "Ticket ID: $ticketId, Username: $username, Phone: $phone, Unique Code: $uniqueCode";

        // Insert QR code into the database
        $stmt = $pdo->prepare("INSERT INTO ticket_qr_code (ticket_id, qr_code, used, checked_in) VALUES (?, ?, 0, 0)");
        $stmt->execute([$ticketId, $uniqueCode]);

        // Add QR code to the list
        $qrCodes[] = $uniqueCode;
    }

    // Retrieve event details
    $stmt = $pdo->prepare("SELECT title, location, date, time, price, description FROM events WHERE id = ?");
    $stmt->execute([$eventId]);
    $eventDetails = $stmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode([
        "success" => "Ticket(s) generated successfully.",
        "ticket_id" => $ticketId,
        "event_details" => $eventDetails,
        "qr_codes" => $qrCodes // Include the list of QR codes in the response
    ]);
} else {
    echo json_encode(["error" => "Invalid request method."]);
}
