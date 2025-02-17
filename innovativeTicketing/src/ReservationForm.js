import React, { useState } from "react";
import { PDFDocument, rgb } from "pdf-lib";
import QRCode from "qrcode";
import BAUlogoImageBytes from "./assets/logo.png";
import IAlogoImageBytes from "./assets/InnoLogo.png";
import { Bounce, toast } from "react-toastify";
import { CircularProgress } from "@mui/material";

function ReservationForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [tickets, setTickets] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);

    e.preventDefault();
    const totalAmount = tickets * 50;
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/create-ticket.php`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: name,
            phone: phone,
            seller: sessionStorage.getItem("userId"),
            quantity: tickets,
            event_id: 1,
          }),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Ticket added successfully:", result);
        for (let index = 0; index < tickets; index++) {
          let eventDetails = result["event_details"];
          generatePdf(
            result["ticket_id"],
            result["qr_codes"][index],
            index,
            eventDetails["location"],
            eventDetails["date"],
            eventDetails["time"],
            eventDetails["price"]
          );
        }
        toast.success(
          `Reservation confirmed for ${name}. Total amount: $${totalAmount}`,
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          }
        );
        // Handle success (e.g., notify the user, update the UI, etc.)
      } else {
        console.error("Failed to add ticket:", response.statusText);
        // Handle failure (e.g., show error message to the user)
      }
    } catch (error) {
      console.error("Error adding ticket:", error);
      // Handle network or other errors
    }
    setLoading(false);
    // You can send this data to your backend here
  };

  const generatePdf = async (
    ticketId,
    qrCodeText,
    index,
    location,
    date,
    time,
    price
  ) => {
    try {
      // Create a new PDF document
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([595.276, 841.89]); // A4 size in points (Portrait)
      const { width, height } = page.getSize();

      // Define dimensions and positions
      const logoWidth = 300; // Width of the logo
      const logoHeight = 94; // Height of the logo
      // Load logo image using fetch
      // Replace with your logo URL
      const logoImageData = await fetch(BAUlogoImageBytes).then((res) =>
        res.arrayBuffer()
      );
      const logoImage = await pdfDoc.embedPng(logoImageData);

      // Add the logo to the page
      page.drawImage(logoImage, {
        x: 25, // X position of the logo
        y: height - logoHeight - 25, // Y position of the logo (top of the page with margin)
        width: logoWidth,
        height: logoHeight,
      });

      // Position for QR code text
      const qrCodeTextX = width - 150; // X position of the QR code text (right of the logo with a margin)
      const qrCodeTextY = height - 120; // Y position of the QR code text

      // Add QR code text to the page
      page.drawText(qrCodeText, {
        x: qrCodeTextX,
        y: qrCodeTextY,
        size: 8, // Font size
      });

      const fontSize = 10; // Smaller text size for table
      const cellPadding = 15; // Padding inside table cells
      const rowHeight = [30, 30, 30]; // Heights for each row (1st row is taller)
      const cellWidth = (width - 2 * cellPadding) / 2; // Two columns
      const tableX = cellPadding;
      const tableY = height - 125;
      // Draw the table border
      page.drawRectangle({
        x: tableX,
        y: tableY - rowHeight.reduce((acc, height) => acc + height, 0),
        width: width - 2 * tableX,
        height: rowHeight.reduce((acc, height) => acc + height, 0),
        borderColor: rgb(0, 0, 0),
        borderWidth: 1,
      });

      // Draw rows and cells
      let currentY = tableY;
      const rows = [
        [`Name: ${name}`, `Location: ${location}`],
        [`Phone Number: ${phone}`, `Date: ${date}`],
        [`Ticket Price: ${price} USD`, `Time: ${time}`],
      ];

      rows.forEach((row, rowIndex) => {
        // Draw row border
        page.drawRectangle({
          x: tableX,
          y: currentY - rowHeight[rowIndex],
          width: width - 2 * tableX,
          height: rowHeight[rowIndex],
          borderColor: rgb(0, 0, 0),
          borderWidth: 1,
        });

        // Draw cells in the row
        row.forEach((text, colIndex) => {
          const cellX = tableX + cellWidth * colIndex;
          page.drawRectangle({
            x: cellX,
            y: currentY - rowHeight[rowIndex],
            width: cellWidth,
            height: rowHeight[rowIndex],
            borderColor: rgb(0, 0, 0),
            borderWidth: 1,
          });

          page.drawText(text, {
            x: cellX + cellPadding,
            y: currentY - rowHeight[rowIndex] + cellPadding,
            size: fontSize, // Smaller text size
            color: rgb(0, 0, 0),
            maxWidth: cellWidth - 2 * cellPadding,
            lineHeight: fontSize + 2,
          });
        });

        currentY -= rowHeight[rowIndex];
      });
      // QR code generation
      const qrCodeDataUrl = await QRCode.toDataURL(qrCodeText, {
        width: 100,
        margin: 1,
      });

      // Convert Data URL to ArrayBuffer
      const qrCodeImageBytes = await fetch(qrCodeDataUrl).then((res) =>
        res.arrayBuffer()
      );
      const qrCodeImage = await pdfDoc.embedPng(qrCodeImageBytes);

      // Position for QR code image
      const qrCodeX = width - 175; // Adjust to place QR code below the table
      const qrCodeY = height - 310; // Adjust vertical position

      // Draw the QR code image to the page
      page.drawImage(qrCodeImage, {
        x: qrCodeX,
        y: qrCodeY,
        width: 90, // QR code width
        height: 90, // QR code height
      });

      // Add Terms and Conditions text
      const termsY = currentY - 25; // Position for the Terms and Conditions text
      const termsText = `
  Terms and Conditions:
  
  1. Ticket Validity:
      - This ticket is valid only for the date and time specified.
      - It is non-transferable and non-refundable.
  
  2. Admission:
      - Admission to the dinner is granted only upon presentation of a valid ticket. Each ticket admits one person only.
      - Doors open at 6 PM.
      - Guests are advised to arrive on time. Late arrivals may result in limited seating options or denied entry.
  
  3. Dress Code:
      - The dress code for the event is formal. Guests not adhering to the dress code may be refused entry.
  
  4. Conduct:
      - All attendees are expected to maintain decorum throughout the event. The BAUAA reserves the right to refuse admission or remove any guest whose behavior is deemed inappropriate.
      - The consumption of alcohol is restricted.
  
  5. Health & Safety:
      - Any person who feels unwell or displays symptoms of illness is encouraged to refrain from attending the event.
  
  6. Liability:
      - The BAUAA shall not be held responsible for any loss, damage, or injury incurred during the event, whether personal or property-related.
  
  7. Event Changes:
      - The BAUAA reserves the right to make changes to the event schedule, or venue, as necessary. In such cases, ticket holders will be notified in advance.
  
  8. Photography & Media:
      - By attending this event, you consent to being photographed or recorded. These images and recordings may be used by BAUAA for promotional or archival purposes.
      - Guests are allowed to take photos or videos for personal use but must respect the privacy of other attendees.
       `;

      // Add Terms and Conditions text to PDF
      page.drawText(termsText, {
        x: 50,
        y: termsY,
        size: 10,
        lineHeight: 12,
        maxWidth: width - 150,
        color: rgb(0, 0, 0),
      });

      // Define dimensions and positions
      const IAlogoWidth = 125; // Width of the logo
      const IAlogoHeight = 63; // Height of the logo
      // Load logo image using fetch
      // Replace with your logo URL
      const IAlogoImageData = await fetch(IAlogoImageBytes).then((res) =>
        res.arrayBuffer()
      );
      const IAlogoImage = await pdfDoc.embedPng(IAlogoImageData);

      // Add the logo to the page
      page.drawImage(IAlogoImage, {
        x: 225, // X position of the logo
        y: 25, // Y position of the logo (top of the page with margin)
        width: IAlogoWidth,
        height: IAlogoHeight,
      });

      page.drawText("Innovative Ticketing by Innovation Alchemy", {
        x: 215,
        y: 100,
        size: 8,
        color: rgb(0, 0, 0),
      });

      // Serialize the PDF document to bytes
      const pdfBytes = await pdfDoc.save();

      // Create a Blob and download the PDF
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `ticket_${ticketId}_${index}_${qrCodeText}.pdf`;
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div className="ticket-selector">
        <input
          className="numberOfTickets"
          type="input"
          onChange={(e) => {
            if (e.target.value !== null) setTickets(e.target.value);
          }}
        />
      </div>
      {loading ? (
        <div className="flex">
          <CircularProgress />
        </div>
      ) : (
        <button type="submit">Buy Tickets</button>
      )}
    </form>
  );
}

export default ReservationForm;
