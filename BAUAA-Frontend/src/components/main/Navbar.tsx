import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // For navigation
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control mobile menu visibility

  // Function to toggle mobile menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();
  return (
    <div>
      {/* Desktop Navbar (visible above 1200px) */}
      <div className="hidden custom-lg:flex items-center fixed z-30 top-0 left-1/2 transform -translate-x-1/2 mt-5 w-[90%] h-[90px] bg-white rounded-[30px] shadow-lg">
        <div className="flex px-10 items-center justify-between w-[100%]">
          {/* Logo */}
          <img src="logo.svg" alt="Logo" />

          {/* Navigation Links */}
          <div className="flex gap-x-4 md:gap-x-8 lg:gap-x-12 text-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "text-primary"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "text-primary"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "text-primary"
              }
            >
              Events
            </NavLink>
            <NavLink
              to="/getinvolved"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "text-primary"
              }
            >
              Get Involved
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "text-primary"
              }
            >
              Contact Us
            </NavLink>
          </div>

          {/* Sign In Button */}
          <Button
            onClick={() => {
              {
                window.scrollTo(0, 0);
                navigate("/login");
              }
            }}
            text="Sign in"
          />
        </div>
      </div>

      {/* Mobile Navbar (visible below 1200px) */}
      <div className="custom-lg:hidden flex items-center justify-between w-full px-5 py-4 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        {/* Logo */}
        <img src="logo.svg" alt="Logo" className="w-[100%] h-[50px]" />

        {/* Hamburger Icon */}
        <button onClick={toggleMenu} className="text-3xl focus:outline-none">
          {isOpen ? "✕" : "☰"} {/* Close icon when open, burger when closed */}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="custom-lg:hidden fixed top-[70px] left-0 right-0 bg-white shadow-md py-4 z-40">
          <div className="flex flex-col items-center space-y-4">
            <NavLink
              to="/"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "text-primary"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutus"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "text-primary"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/events"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "text-primary"
              }
            >
              Events
            </NavLink>
            <NavLink
              to="/getinvolved"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "text-primary"
              }
            >
              Get Involved
            </NavLink>
            <NavLink
              to="/contact"
              onClick={toggleMenu}
              className="text-lg text-primary"
            >
              Contact Us
            </NavLink>
            <Button onClick={() => {}} text="Sign in" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
