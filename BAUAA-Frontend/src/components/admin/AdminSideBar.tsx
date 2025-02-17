import React, { useState } from "react";
import {
  FaCalendarDay,
  FaGift,
  FaPowerOff,
  FaRegCalendarDays,
  FaRegHandshake,
  FaRegHeart,
  FaRegMessage,
  FaRegUser,
  FaUserPlus,
} from "react-icons/fa6";
import logo from "../../../public/logo.svg";
import { FaHandsHelping, FaCog, FaClock, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for routing

const AdminSideBar = ({
  isOpen,
  close,
}: {
  isOpen?: boolean;
  close?: () => void;
}) => {
  const [activeLink, setActiveLink] = useState("/admin/dashboard"); // Set default active link

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    if (close) close(); // Close sidebar if needed
  };

  return (
    <div
      className={`fixed left-0 top-0 w-[250px] md:block ${
        isOpen ? "block" : "hidden"
      } bg-white h-full px-3 pb-5 overflow-y-auto z-10`}
      onClick={close}
    >
      <div className="text-4xl py-3 w-full flex items-center">
        <img src={logo} alt="Logo" className="flex-1 w-[95%] object-cover" />

        {isOpen && (
          <FaTimes className="text-gray-600 h-[20px] w-[20px] cursor-pointer" />
        )}
      </div>
      {/* Dashboard section with clock icon and active indicator */}
      <Link
        to="/admin/dashboard"
        onClick={() => handleLinkClick("/admin/dashboard")}
      >
        <div
          className={`flex items-center px-5 py-2 rounded-md mb-4 ${
            activeLink === "/admin/dashboard"
              ? "border-l-4 border-[#4379EE] bg-[#4379EE] text-white"
              : "bg-white text-[#202224]"
          }`}
        >
          <FaClock className="mr-3" />
          <div className="font-nunito font-semibold text-[14px] leading-[19.1px] tracking-[0.3px]">
            Dashboard
          </div>
        </div>
      </Link>
      {/* Sidebar links */}
      <div className="font-nunito font-medium text-sm text-[#202224] text-left tracking-[0.3px] leading-[19.1px]">
        <Link
          to="/admin/users"
          onClick={() => handleLinkClick("/admin/users")}
          className={`flex items-center px-5 py-2 mb-2 border-l-4 ${
            activeLink === "/admin/users"
              ? "border-[#4379EE]"
              : "border-transparent"
          } hover:border-[#4379EE]`}
        >
          <FaUserPlus className="mr-3" /> Users
        </Link>
        <Link
          to="/admin/cal"
          onClick={() => handleLinkClick("/admin/cal")}
          className={`flex items-center px-5 py-2 mb-2 border-l-4 ${
            activeLink === "/admin/cal"
              ? "border-[#4379EE]"
              : "border-transparent"
          } hover:border-[#4379EE]`}
        >
          <FaCalendarDay className="mr-3" /> Events
        </Link>
        <Link
          to="/admin/donations"
          onClick={() => handleLinkClick("/admin/donations")}
          className={`flex items-center px-5 py-2 mb-2 border-l-4 ${
            activeLink === "/admin/donations"
              ? "border-[#4379EE]"
              : "border-transparent"
          } hover:border-[#4379EE]`}
        >
          <FaRegHeart className="mr-3" /> Donations
        </Link>
        <Link
          to="/admin/board"
          onClick={() => handleLinkClick("/admin/board")}
          className={`flex items-center px-5 py-2 mb-2 border-l-4 ${
            activeLink === "/admin/board"
              ? "border-[#4379EE]"
              : "border-transparent"
          } hover:border-[#4379EE]`}
        >
          <FaRegUser className="mr-3" /> Board Members
        </Link>
        <Link
          to="/admin/partners"
          onClick={() => handleLinkClick("/admin/partners")}
          className={`flex items-center px-5 py-2 mb-2 border-l-4 ${
            activeLink === "/admin/partners"
              ? "border-[#4379EE]"
              : "border-transparent"
          } hover:border-[#4379EE]`}
        >
          <FaRegHandshake className="mr-3" /> Partners
        </Link>
        <Link
          to="/admin/contact"
          onClick={() => handleLinkClick("/admin/contact")}
          className={`flex items-center px-5 py-2 mb-9 border-l-4 ${
            activeLink === "/admin/contact"
              ? "border-[#4379EE]"
              : "border-transparent"
          } hover:border-[#4379EE]`}
        >
          <FaRegMessage className="mr-3" /> Contact Us
        </Link>
        <hr className="my-4 border-t-[0.6px] border-gray-300 mt-2" />
        <div className="px-5 py-1 text-[12px] leading-[16.37px] tracking-[0.257px] text-[#202224] font-nunito">
          Pages
        </div>
        <Link
          to="/admin/home"
          onClick={() => handleLinkClick("/admin/home")}
          className={`flex items-center px-5 py-2 border-l-4 ${
            activeLink === "/admin/home"
              ? "border-[#4379EE]"
              : "border-transparent"
          } hover:border-[#4379EE]`}
        >
          <FaGift className="mr-3" /> Home
        </Link>
        <Link
          to="/admin/about"
          onClick={() => handleLinkClick("/admin/about")}
          className={`flex items-center px-5 py-2 border-l-4 ${
            activeLink === "/admin/about"
              ? "border-[#4379EE]"
              : "border-transparent"
          } hover:border-[#4379EE]`}
        >
          <FaRegCalendarDays className="mr-3" /> About
        </Link>
        <Link
          to="/admin/get-involved"
          onClick={() => handleLinkClick("/admin/get-involved")}
          className={`flex items-center px-5 py-2 mb-10 border-l-4 ${
            activeLink === "/admin/get-involved"
              ? "border-[#4379EE]"
              : "border-transparent"
          } hover:border-[#4379EE]`}
        >
          <FaHandsHelping className="mr-3" /> Get Involved
        </Link>
        <hr className="my-4 border-t-[0.6px] border-gray-300" />
      </div>
      {/* Settings at the bottom */}
      <div className="mt-auto">
        <Link
          to="/admin/settings"
          onClick={() => handleLinkClick("/admin/settings")}
          className={`flex items-center px-5 py-2 border-l-4 ${
            activeLink === "/admin/settings"
              ? "border-[#4379EE]"
              : "border-transparent"
          } hover:border-[#4379EE]`}
        >
          <FaCog className="mr-3" /> Settings
        </Link>
        <Link
          to="/admin/login"
          onClick={() => handleLinkClick("/admin/login")}
          className={`flex items-center px-5 py-2 border-l-4 ${
            activeLink === "/admin/login"
              ? "border-[#4379EE]"
              : "border-transparent"
          } hover:border-[#4379EE]`}
        >
          <FaPowerOff className="mr-3" /> Logout
        </Link>
      </div>
    </div>
  );
};

export default AdminSideBar;
