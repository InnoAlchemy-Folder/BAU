import React, { useState } from "react";
import QrScanner from "react-qr-scanner";
import { Bounce, toast } from "react-toastify";

function QrCodeScanner() {
  const [qrData, setQrData] = useState(null);
  const [showScanner, setShowScanner] = useState(false);

  const handleScan = (result) => {
    if (result) {
      const qrText = result.text;
      setQrData(result.text); // Extracting the text property
      // Send the text via a POST request here if needed
      fetch(`${process.env.REACT_APP_API_URL}/scan-qr-code.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ qr_code: qrText }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Backend Response:", data); // Log the backend response
          if (data.success) {
            toast.success(`Qr Code Scanned Successfully`, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Bounce,
            });
            setShowScanner(false); // Hide the scanner and show the scan button again
            setQrData(null);
          } else {
            // Handle the case where the QR code is not valid
            toast.error(`Invalid Qr Code, Try Again!`, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Bounce,
            });
            setShowScanner(false); // Hide the scanner and show the scan button again
            setQrData(null); // Clear the QR data
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          toast.error(`An error occurred while scanning the QR code`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
        });
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <div className="flex--col">
      <h1>QR Code Scanner</h1>
      {!showScanner && (
        <button className="AABtn" onClick={() => setShowScanner(true)}>
          Scan QR Code
        </button>
      )}
      {showScanner && (
        <div className="videoScan flex">
          <QrScanner
            delay={300}
            onError={handleError}
            onScan={handleScan}
            constraints={{
              audio: false,
              video: { facingMode: "rear" },
              legacyMode: true,
            }}
          />
        </div>
      )}
      {qrData && <p>Scanned QR Code Data: {qrData}</p>}
    </div>
  );
}

export default QrCodeScanner;
