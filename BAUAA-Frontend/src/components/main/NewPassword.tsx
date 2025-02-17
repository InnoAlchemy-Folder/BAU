import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleRePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRePassword(event.target.value);
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rePasswordVisible, setRePasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const toggleRePasswordVisibility = () => {
    setRePasswordVisible(!rePasswordVisible);
  };

  return (
    <div className=" flex-grow flex-col flex items-center justify-center mt-40 gap-3 my-10 mx-5">
      <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-primary font-bold mb-5">
        Enter your new password
      </div>
      <div className="relative w-full">
        <input
          type={passwordVisible ? "text" : "password"} // Toggle between password and text input types
          name="Password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          className="input"
          placeholder="Enter password"
        />
        {/* Eye icon to toggle visibility */}
        <span
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
          onClick={togglePasswordVisibility}
        >
          {passwordVisible ? (
            <FontAwesomeIcon icon={faEyeSlash} />
          ) : (
            <FontAwesomeIcon icon={faEye} />
          )}
        </span>
      </div>
      <div className="relative w-full">
        <input
          type={rePasswordVisible ? "text" : "password"} // Toggle between password and text input types
          name="Password"
          id="password"
          value={rePassword}
          onChange={handleRePasswordChange}
          className="input"
          placeholder="Enter password Again"
        />
        {/* Eye icon to toggle visibility */}
        <span
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
          onClick={toggleRePasswordVisibility}
        >
          {rePasswordVisible ? (
            <FontAwesomeIcon icon={faEyeSlash} />
          ) : (
            <FontAwesomeIcon icon={faEye} />
          )}
        </span>
      </div>
      <button
        onClick={() => {}}
        className="w-full bg-primary text-white py-3 rounded-2xl mt-5"
      >
        Save
      </button>
    </div>
  );
};

export default NewPassword;
