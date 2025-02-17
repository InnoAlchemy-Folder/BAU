import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { socialLinks } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import VerifyEmail from "../../components/main/VerifyEmail";

const Register = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [repeatPasswordVisible, setRepeatPasswordVisible] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const toggleRepeatPasswordVisibility = () => {
    setRepeatPasswordVisible(!repeatPasswordVisible);
  };

  const toggleVerifyEmail = () => {
    setVerifyEmail(true);
  };

  return !verifyEmail ? (
    <div className=" flex-grow flex-col flex items-center justify-center mt-40 gap-3 my-10 mx-5">
      <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-primary font-bold mb-5">
        Create Your Account
      </div>

      <div className="flex gap-3">
        <input
          type="text"
          name="First Name"
          id="first_name"
          value={firstName}
          onChange={handleFirstNameChange}
          placeholder="First Name"
          className="input"
        />
        <input
          type="text"
          name="Last Name"
          id="last_name"
          value={lastName}
          onChange={handleLastNameChange}
          placeholder="Last Name"
          className="input"
        />
      </div>
      <input
        type="text"
        name="Email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
        className="input"
      />
      <div className="relative w-full">
        <input
          type={passwordVisible ? "text" : "password"} // Toggle between password and text input types
          name="Password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          className="input"
          placeholder="Enter your password"
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
          type={repeatPasswordVisible ? "text" : "password"} // Toggle between password and text input types
          name="Repeat Password"
          id="repeat_password"
          className="input"
          placeholder="Enter your password"
        />
        {/* Eye icon to toggle visibility */}
        <span
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
          onClick={toggleRepeatPasswordVisibility}
        >
          {repeatPasswordVisible ? (
            <FontAwesomeIcon icon={faEyeSlash} />
          ) : (
            <FontAwesomeIcon icon={faEye} />
          )}
        </span>
      </div>
      <button
        onClick={() => {
          toggleVerifyEmail();
        }}
        className="w-full bg-primary text-white py-3 rounded-xl"
      >
        Sign Up
      </button>
      <div className="font-semibold text-black text-lg">
        - Or Sign up with -
      </div>
      <div className="flex w-full justify-evenly">
        {socialLinks.map((link) => (
          <button key={link} onClick={() => {}}>
            <img src={link} />
          </button>
        ))}
      </div>
      <div
        onClick={() => {
          window.scroll(0, 0);
          navigate("/login");
        }}
        className="flex gap-5 text-sm sm:text-lg font-semibold cursor-pointer"
      >
        <div>Already Have an Account</div>
        <div className="text-secondary hover:underline">Sign in</div>
      </div>
    </div>
  ) : (
    <VerifyEmail email={email} />
  );
};

export default Register;
