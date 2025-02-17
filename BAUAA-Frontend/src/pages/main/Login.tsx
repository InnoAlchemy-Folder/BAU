import { useState } from "react";
import CustomCheckbox from "../../components/main/CustomCheckBox";
import { socialLinks } from "../../data";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className=" flex-grow flex-col flex items-center justify-center mt-40 gap-3 my-10 mx-5">
      <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-primary font-bold mb-5">
        Login to your Account
      </div>

      <input
        type="text"
        name="Email"
        id="email"
        placeholder="Email"
        className="input"
      />
      <div className="relative w-full">
        <input
          type={passwordVisible ? "text" : "password"} // Toggle between password and text input types
          name="password"
          id="password"
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
      <CustomCheckbox
        checked={isChecked}
        onChange={handleCheckboxChange}
        label=" Remember my password"
      />
      <button
        onClick={() => {}}
        className="w-full bg-primary text-white py-3 rounded-xl"
      >
        Login
      </button>
      <div className="font-semibold text-black text-lg">- Or Login with -</div>
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
          navigate("/register");
        }}
        className="flex gap-5 text-sm sm:text-lg font-semibold cursor-pointer"
      >
        <div>Don't Have an Account</div>
        <div className="text-secondary hover:underline">Sign up</div>
      </div>
      <div className="text-secondary hover:underline">
        Did you forget your password?
      </div>
    </div>
  );
};

export default Login;
