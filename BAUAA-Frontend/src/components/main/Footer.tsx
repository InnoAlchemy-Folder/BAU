import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-primary px-5 md:px-32 py-10 w-full">
      <img src="logo-primary.png" alt="Logo" className="md:mx-0 mx-auto" />
      <div className="flex flex-col md:flex-row mt-7 items-center justify-between">
        <div className="flex flex-wrap gap-5 justify-center md:justify-start">
          <NavLink to="/" className="text-[#717da1]">
            Home
          </NavLink>
          <NavLink to="/aboutus" className="text-[#717da1]">
            About Us
          </NavLink>
          <NavLink to="/events" className="text-[#717da1]">
            Events
          </NavLink>
          <NavLink to="/getinvolved" className="text-[#717da1]">
            Get Involved
          </NavLink>
          <NavLink to="/contact" className="text-[#717da1]">
            Contact Us
          </NavLink>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0">
          <input
            type="email"
            placeholder="johndoe@shuffle.dev"
            className="rounded-md p-2 border text-primary border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <button className="ml-0 md:ml-4 mt-2 md:mt-0 rounded-md bg-[#4684c4] text-white px-4 py-2 hover:bg-primary-light transition duration-300">
            Subscribe
          </button>
        </div>
      </div>
      <div className="-mx-5 md:-mx-32 my-8 border-t border-[#404F65]"></div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="text-[#8896AB] text-center md:text-left text-xl">
          Copyright © 2024, Sponsored & Developed by InnovationAlchemy
        </div>
        <div className="text-[#8896AB] text-center md:text-right text-md mt-2 md:mt-0">
          Terms &emsp; Privacy &emsp; Cookies
        </div>
      </div>
    </div>
  );
};

export default Footer;
