import React, { useState } from "react";
import ReservationForm from "./ReservationForm";
import LoginForm from "./loginForm";
import QrScanner from "./qrScanner"; // Import the QrScanner component
import Logo from "./assets/logo.png";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import TicketingList from "./TicketingList";

function App() {
  const [loggedIn, setLoggedIn] = useState(!!sessionStorage.getItem("userId"));

  const handleLogin = () => {
    window.location.href = "/";
    setLoggedIn(true);
  };

  return (
    <BrowserRouter>
      <ToastContainer />
      <div className="app">
        <div className="navbar">
          <img src={Logo} alt="Committee Logo" className="logo" />
          <div className="nav-items">
            <Link to="/generate" className="nav-button">
              Generate
            </Link>
            <Link to="/scan-qr" className="nav-button">
              Scan
            </Link>
            <Link to="/list" className="nav-button">
              list
            </Link>
            {loggedIn ? null : (
              <Link to="/login" className="nav-button active">
                Login
              </Link>
            )}
          </div>
          {/* {loggedIn && (
            <div className='navlinks flex'>
              <Link to="/Generate">Generate</Link>
            </div>
          )} */}
        </div>
        <Routes>
          <Route
            path="/generate"
            element={
              loggedIn ? (
                <div className="container">
                  <div className="title">
                    العشاء السنوي بمناسبة بداية السنة القضائية
                  </div>
                  <ReservationForm />
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route
            path="/scan-qr"
            element={loggedIn ? <QrScanner /> : <Navigate to="/login" />}
          />
          <Route
            path="/list"
            element={loggedIn ? <TicketingList /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
