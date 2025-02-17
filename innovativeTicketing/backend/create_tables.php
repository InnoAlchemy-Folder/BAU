<?php
include 'config.php';

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create users table
$sql = "CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
)";

if ($conn->query($sql) === TRUE) {
    echo "Table 'users' created successfully.\n";
} else {
    echo "Error creating table 'users': " . $conn->error . "\n";
}

// Create events table
$sql = "CREATE TABLE IF NOT EXISTS events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT
)";

if ($conn->query($sql) === TRUE) {
    echo "Table 'events' created successfully.\n";
} else {
    echo "Error creating table 'events': " . $conn->error . "\n";
}

// Create tickets table
$sql = "CREATE TABLE IF NOT EXISTS tickets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_id INT NOT NULL,
    username VARCHAR(50) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    seller INT NOT NULL,
    quantity INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (event_id) REFERENCES events(id),
    FOREIGN KEY (seller) REFERENCES users(id)
)";

if ($conn->query($sql) === TRUE) {
    echo "Table 'tickets' created successfully.\n";
} else {
    echo "Error creating table 'tickets': " . $conn->error . "\n";
}

// Create ticket_qr_code table
$sql = "CREATE TABLE IF NOT EXISTS ticket_qr_code (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ticket_id INT NOT NULL,
    qr_code VARCHAR(255) NOT NULL UNIQUE,
    used TINYINT(1) DEFAULT 0,
    checked_in TINYINT(1) DEFAULT 0,
    FOREIGN KEY (ticket_id) REFERENCES tickets(id)
)";

if ($conn->query($sql) === TRUE) {
    echo "Table 'ticket_qr_code' created successfully.\n";
} else {
    echo "Error creating table 'ticket_qr_code': " . $conn->error . "\n";
}

$conn->close();
