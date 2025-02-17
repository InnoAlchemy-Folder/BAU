import React, { useState } from "react";
import { Loader } from "lucide-react";
import "./loginForm.css";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    console.log(process.env.REACT_APP_API_URL);

    await fetch(`${process.env.REACT_APP_API_URL}/login.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName: username, password: password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Store user ID in sessionStorage
          sessionStorage.setItem("userId", data.userId); // Assuming the user ID is returned from the backend

          // Handle successful login
          onLogin(); // Call the login handler passed from App.js
        } else {
          console.log("Login failed:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setLoading(false);
  };

  return (
    <div className="container">
      <div className="login-container">
        <h2 className="login-title">Admin Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="username">اسم المستخدم</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">كلمة المرور</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {!loading ? (
            <button type="submit" className="login-button">
              Login
            </button>
          ) : (
            <p>
              <Loader /> Loading...
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
