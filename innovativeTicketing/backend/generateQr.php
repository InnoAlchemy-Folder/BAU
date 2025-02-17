<?php
header("Access-Control-Allow-Origin: *"); // Allow all origins. Change '*' to a specific domain if needed.
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Allow specific HTTP methods
header("Access-Control-Allow-Headers: Content-Type"); // Allow specific headers

// If you want to handle preflight requests (OPTIONS method):
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit; // Stop the script for OPTIONS requests
}

require('vendor/autoload.php'); // Include Composer's autoloader

use Endroid\QrCode\QrCode;
use Endroid\QrCode\Writer\PngWriter;
use TCPDF;

// Define the TicketPDF class
class TicketPDF extends TCPDF {

    function Header(){
        $this->Image('/Users/apple/Documents/InnoAlchemy/Projects/Innovative Ticketing/backend/logo.png', 10, 10, 30); // Adjust the path, X/Y position, and size
        $this->SetFont('helvetica', 'B', 16);
        $this->Cell(0, 10, 'Event Ticket', 0, 1, 'C'); // Title at the center
        $this->Ln(10); // Line break
    }

    function Footer(){
        $this->SetY(-15);
        $this->SetFont('helvetica', 'I', 8);
        $this->Cell(0, 10, 'Page ' . $this->getAliasNumPage(), 0, 0, 'C');
    }

    function AddTicketDetails($name, $phone, $location, $date, $price, $qrCodeImage){
        $this->SetFont('helvetica', '', 12);
        $this->Cell(0, 10, "Name: $name", 0, 1);
        $this->Cell(0, 10, "Phone: $phone", 0, 1);
        $this->Ln(5);
        $this->Cell(0, 10, "Location: $location", 0, 1);
        $this->Cell(0, 10, "Date: $date", 0, 1);
        $this->Cell(0, 10, "Price: $price", 0, 1);
        $this->Ln(5);
        $this->Image('@' . $qrCodeImage, 80, 80, 50, 50); // X/Y position, width, height
        $this->Ln(60);
        $this->MultiCell(0, 10, "Terms and Conditions: \n1. Please bring a valid ID.\n2. The ticket is non-transferable.\n3. No refunds available.");
        $this->Ln(10);
    }
}

// Read JSON data from POST request
$data = json_decode(file_get_contents('php://input'), true);

// Check if data is set and retrieve it
if (isset($data['name']) && isset($data['phone']) && isset($data['ticketCount'])) {
    $name = $data['name'];
    $phone = $data['phone'];
    $ticketCount = intval($data['ticketCount']); // Ensure it's an integer

    // Static event details
    $location = "Beirut Arab University – Beirut Campus";
    $date = "Friday, September 20th 2024 7:00 PM";
    $price = "$50";

    // Create the PDF
    $pdf = new TicketPDF();
    for ($i = 0; $i < $ticketCount; $i++) {
        $pdf->AddPage();

        // Generate the QR code
        $qrCodeText = "Ticket for $name, Phone: $phone, Location: $location, Date: $date";
        $qrCode = new QrCode($qrCodeText);
        $qrCode->setSize(150);
        $writer = new PngWriter();
        $qrCodeImage = $writer->write($qrCode)->getString();

        // Add ticket details and QR code to PDF
        $pdf->AddTicketDetails($name, $phone, $location, $date, $price, $qrCodeImage);
    }

    // Output the PDF to the browser and force download
    $pdfFileName = 'ticket_' . uniqid() . '.pdf';
    header('Content-Type: application/pdf');
    header('Content-Disposition: attachment; filename="' . $pdfFileName . '"');
    $pdf->Output('D', $pdfFileName); // Output to browser and force download
} else {
    echo "Required POST data is missing.";
}
?>
