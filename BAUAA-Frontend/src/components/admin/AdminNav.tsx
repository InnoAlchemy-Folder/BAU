import { useState, useEffect } from "react";
import { FaBars, FaRegBell, FaChevronDown } from "react-icons/fa";
import admin_pic from "../../../public/admin.png";
import english_flag from "../../../public/english.png";
import arabic_flag from "../../../public/arabic.png";
import AdminSideBar from "./AdminSideBar";

const AdminNav: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };

  // const handleResize = () => {
  //   if (window.innerWidth < 640) {
  //     setSidebarOpen(false);
  //   } else {
  //     setSidebarOpen(true);
  //   }
  // };

  // useEffect(() => {
  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  const [notifications, setNotifications] = useState<number>(5); // Example number of notifications
  const [notificationsList] = useState([
    "New user registered",
    "New event scheduled",
    "Donation received",
    "Contact message received",
    "Board member added",
  ]);
  const [showNotifications, setShowNotifications] = useState<boolean>(false);

  return (
    <>
      <AdminSideBar isOpen={sidebarOpen} close={() => setSidebarOpen(false)} />

      {/* Main Content */}

      {/* Main Navigation Bar */}
      <div className="fixed top-0 md:left-[250px] left-0 right-0 px-6 py-3 bg-white flex items-center justify-between z-10">
        <div className="flex items-center md:hidden">
          <FaBars
            className="text-gray-700 text-xl cursor-pointer"
            onClick={() => {
              setSidebarOpen(true);
            }}
          />
        </div>
        <div className="ml-auto flex mr-7 items-center space-x-6">
          {/* Notification Icon */}
          <div
            className="relative"
            onMouseEnter={() => setShowNotifications(true)}
            onMouseLeave={() => setShowNotifications(false)}
          >
            <FaRegBell
              className="text-gray-700 text-xl cursor-pointer"
              onClick={() => setNotifications(0)} // Optionally reset notifications count
            />
            {notifications > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {notifications}
              </span>
            )}
            {showNotifications && notifications > 0 && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2">
                {notificationsList.map((notification, index) => (
                  <div key={index} className="px-2 py-1 text-gray-700">
                    {notification}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Language Selector */}
        <div className="relative">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            <img
              src={selectedLanguage === "English" ? english_flag : arabic_flag}
              alt="Flag"
              className="w-17 h-9 rounded-sm  "
            />
            <span className="text-gray-700">{selectedLanguage}</span>
            <FaChevronDown className="text-gray-500" />
          </div>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
              <div
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleLanguageChange("English")}
              >
                English
              </div>
              <div
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleLanguageChange("Arabic")}
              >
                Arabic
              </div>
            </div>
          )}
        </div>

        {/* Profile Section */}
        <div className="relative">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setProfileOpen(!profileOpen)}
          >
            <img
              src={admin_pic}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <div className="text-left">
              <div className="text-[#404040] font-nunito font-bold text-[14px]">
                John Doe
              </div>
              <div className="text-[#565656] font-nunito font-medium text-[12px]">
                Admin
              </div>
            </div>
          </div>
          {profileOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md p-4">
              <img
                src={admin_pic}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <div className="text-gray-700 font-nunito font-semibold text-[14px]">
                John Doe
              </div>
              <div className="text-gray-500 font-nunito text-[12px]">Admin</div>
              <div className="mt-3 text-gray-600">
                <p>Email: john.doe@example.com</p>
                <p>Phone: (123) 456-7890</p>
              </div>
              <button className="mt-4 w-full text-[#4379EE] hover:text-[#2a5bbd]">
                More Info
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminNav;
