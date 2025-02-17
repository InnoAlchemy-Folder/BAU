import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, CircularProgress, Alert } from "@mui/material";

function TicketingList() {
  const [ticketData, setTicketData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userId = sessionStorage.getItem("userId"); // Get the user ID from session storage

    if (!userId) {
      setError("User ID not found in session storage.");
      setLoading(false);
      return;
    }

    // Fetch data from the API when the component mounts
    fetch(`${process.env.REACT_APP_API_URL}/get-list-data.php`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        userId: userId, // Send userId in headers
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);

        if (data.success) {
          setTicketData(data.data);
        } else {
          setError("Failed to fetch data");
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  const columns = [
    { field: "qr_code_id", headerName: "Ticket Id", width: 100 },
    { field: "event_title", headerName: "Event Title", width: 300 },
    { field: "seller_name", headerName: "Seller Name", width: 200 },
    { field: "ticket_username", headerName: "User Name", width: 200 },
    { field: "created_at", headerName: "Created At", width: 150 },
    { field: "checked_in_at", headerName: "Checked In", width: 150 },
    { field: "used", headerName: "Used", width: 100 },
    { field: "price", headerName: "Price", width: 100 },
  ];

  return (
    <Box
      sx={{
        height: "100%",
        width: "80%",
        margin: "auto",
        padding: "16px",
      }}
    >
      <h2 className="flex text-center">Ticketing List</h2>
      <DataGrid
        rows={ticketData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10]}
        disableSelectionOnClick
        autoHeight
        getRowId={(row) => row.id} // Ensure this ID is unique
        sx={{
          "& .MuiDataGrid-topContainer": {
            "--DataGrid-containerBackground": "#2c3584", // Set header background color
            color: "#fff", // Set header text color to white
            fontSize: "1.1rem", // Make header text bigger
          },
          "& .MuiDataGrid-cell": {
            fontSize: "2rem", // Increase cell text size
          },
          "& .MuiSvgIcon-root": {
            color: "white",
          },
          "& .MuiIconButton-root": {
            fontSize: "16px",
          },
        }}
      />
    </Box>
  );
}

export default TicketingList;
