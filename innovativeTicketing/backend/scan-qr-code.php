<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Include the database configuration file
include 'config.php';
$data = json_decode(file_get_contents('php://input'), true);

// Check if POST data is received
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve POST data
    $qrCodeText = isset($data['qr_code']) ? $data['qr_code'] : '';

    if (empty($qrCodeText)) {
        echo json_encode(["error" => "QR code text is required."]);
        exit;
    }

    // Database connection
    $pdo = new PDO(DB_DSN, DB_USER, DB_PASS); // Update DB_DSN, DB_USER, and DB_PASS in config.php

    // Search for the QR code in the database
    $stmt = $pdo->prepare("SELECT * FROM ticket_qr_code WHERE qr_code = ? AND used = 0");
    $stmt->execute([$qrCodeText]);
    $ticket = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($ticket) {
        // QR code found and not used, update it as used
        $stmt = $pdo->prepare("UPDATE ticket_qr_code SET used = 1 WHERE id = ?");
        $stmt->execute([$ticket['id']]);

        // Return success response
        echo json_encode(['success' => true, 'message' => 'QR code marked as used.']);
    } else {
        // QR code not found or already used
        echo json_encode(['success' => false, 'message' => 'QR code not found or already used.']);
    }
} else {
    echo json_encode(['error' => 'Invalid request method.']);
}
