<?php
include 'config.php';

// Handle CORS
header("Access-Control-Allow-Origin: *"); // Allow all origins; you can restrict this to specific domains
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Allow specific methods
header("Access-Control-Allow-Headers: Content-Type, Authorization, userId"); // Allow custom headers

// Database connection
$pdo = new PDO(DB_DSN, DB_USER, DB_PASS);

// Retrieve the user ID from the headers
$userId = isset($_SERVER['HTTP_USERID']) ? intval($_SERVER['HTTP_USERID']) : 0;

if ($userId === 0) {
    echo json_encode(["success" => false, "error" => "Invalid User ID"]);
    exit;
}

// Query to fetch unique ticket details with 'used' status as boolean
$stmt = $pdo->prepare("
    SELECT 
        tqr.id,
        tqr.id AS qr_code_id,
        e.title AS event_title,
        u.username AS seller_name,
        t.username AS ticket_username,
        t.created_at,
        tqr.checked_in AS checked_in_at,
        tqr.used,
        e.price AS price
    FROM tickets t
    JOIN events e ON t.event_id = e.id
    JOIN users u ON t.seller = u.id
    LEFT JOIN ticket_qr_code tqr ON t.id = tqr.ticket_id
    WHERE t.seller = ?
");

$stmt->execute([$userId]);

$tickets = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach ($tickets as &$ticket) {
    $ticket['checked_in_at'] = $ticket['checked_in_at'] == 0 ? "Not Used Yet" : $ticket['checked_in_at'];
    $ticket['used'] = (bool) $ticket['used']; // Convert 'used' to boolean
}

if ($tickets) {
    echo json_encode(["success" => true, "data" => $tickets]);
} else {
    echo json_encode(["success" => false, "error" => "No tickets found"]);
}
