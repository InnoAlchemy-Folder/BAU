<?php
header("Access-Control-Allow-Origin: *"); // Allow all origins. Change '*' to a specific domain if needed.
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Allow specific HTTP methods
header("Access-Control-Allow-Headers: Content-Type"); // Allow specific headers

// If you want to handle preflight requests (OPTIONS method):
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit; // Stop the script for OPTIONS requests
}
// Include the database configuration file
include 'config.php';
$data = json_decode(file_get_contents('php://input'), true);
// Get the posted data
$userName = $data['userName'] ?? '';
$password = $data['password'] ?? '';

// Prepare the SQL statement to prevent SQL injection
$stmt = $conn->prepare("SELECT id, password FROM users WHERE username = ?");
$stmt->bind_param("s", $userName);

// Execute the query
$stmt->execute();

// Get the result
$result = $stmt->get_result();

// Check if a matching user was found
if ($result->num_rows > 0) {
    // Fetch the user data
    $row = $result->fetch_assoc();
    $userId = $row['id'];
    $hashedPassword = $row['password'];

    // Verify the provided password against the hashed password
    if (password_verify($password, $hashedPassword)) {
        // Password matches, login successful
        echo json_encode([
            "success" => true,
            "message" => "Login successful",
            "userId" => $userId // Include the user ID in the response
        ]);
    } else {
        // Password does not match
        echo json_encode(["success" => false, "message" => "Invalid username or password"]);
    }
} else {
    // No matching user found
    echo json_encode(["success" => false, "message" => "Invalid username or password"]);
}

// Close the statement and connection
$stmt->close();
$conn->close();
