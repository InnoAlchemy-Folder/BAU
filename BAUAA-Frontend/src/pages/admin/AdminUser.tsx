import React, { useState } from "react";

const AdminUser = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      address: "123 Main St",
      birthday: "04 Sep 2019",
      phone: "123-456-7890",
      eventStatus: "Joined",
    },
    {
      id: 2,
      name: "Jane Smith",
      address: "456 Maple Ave",
      birthday: "12 Dec 2020",
      phone: "987-654-3210",
      eventStatus: "Pending",
    },
    {
      id: 3,
      name: "Alice Johnson",
      address: "789 Oak St",
      birthday: "15 Mar 2021",
      phone: "456-123-7890",
      eventStatus: "Joined",
    },
    {
      id: 4,
      name: "Bob Brown",
      address: "321 Pine Rd",
      birthday: "22 Aug 2018",
      phone: "321-654-0987",
      eventStatus: "Pending",
    },
    {
      id: 5,
      name: "Charlie Green",
      address: "654 Cedar Ln",
      birthday: "10 Oct 2017",
      phone: "876-543-2109",
      eventStatus: "Joined",
    },
    // Add more users here for demo purposes
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; // Adjust this value as needed
  const totalUsers = users.length;
  const endIndex = Math.min(currentIndex + itemsPerPage, totalUsers);

  const handleNext = () => {
    if (endIndex < totalUsers) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (
    <div className=" p-6">
      <h1 className="text-4xl font-bold text-[#202224] font-nunito mb-6">
        Users
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full bg-[#FCFDFD] border-collapse border-gray-300 rounded-lg border-spacing-2 font-nunito">
          {" "}
          {/* Added border-spacing */}
          <thead>
            <tr>
              <th className="px-10 py-2 text-left font-bold text-[#202224] border-b border-gray-300 font-nunito">
                {" "}
                {/* Increased padding */}
                ID
              </th>
              <th className="px-10 py-2 text-left font-bold text-[#202224] border-b border-gray-300 font-nunito">
                {" "}
                {/* Increased padding */}
                NAME
              </th>
              <th className="px-10 py-2 text-left font-bold text-[#202224] border-b border-gray-300 font-nunito">
                {" "}
                {/* Increased padding */}
                ADDRESS
              </th>
              <th className="px-10 py-2 text-left font-bold text-[#202224] border-b border-gray-300 font-nunito">
                {" "}
                {/* Increased padding */}
                BIRTHDAY
              </th>
              <th className="px-10 py-2 text-left font-bold text-[#202224] border-b border-gray-300 font-nunito">
                {" "}
                {/* Increased padding */}
                PHONE
              </th>
              <th className="px-10 py-2 text-left  font-bold text-[#202224] border-b border-gray-300 font-nunito ">
                {" "}
                {/* Increased padding */}
                EVENT STATUS
              </th>
            </tr>
          </thead>
          <tbody>
            {users.slice(currentIndex, endIndex).map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="px-10 py-5 border-b border-gray-300 font-nunito">
                  {" "}
                  {/* Increased padding */}
                  {user.id}
                </td>
                <td className="px-10 py-5 border-b border-gray-300 font-nunito">
                  {" "}
                  {/* Increased padding */}
                  {user.name}
                </td>
                <td className="px-10 py-5 border-b border-gray-300 font-nunito">
                  {" "}
                  {/* Increased padding */}
                  {user.address}
                </td>
                <td className="px-10 py-5 border-b border-gray-300 font-nunito">
                  {" "}
                  {/* Increased padding */}
                  {user.birthday}
                </td>
                <td className="px-10 py-5 border-b border-gray-300 font-nunito">
                  {" "}
                  {/* Increased padding */}
                  {user.phone}
                </td>
                <td className="px-10 py-5 border-b border-gray-300 font-nunito">
                  {" "}
                  {/* Increased padding */}
                  <span
                    className={`inline-block w-24 px-4 py-1 text-sm font-bold rounded text-center font-nunito ${
                      user.eventStatus === "Joined"
                        ? "bg-[#00B69B]/50 text-[#00B69B]"
                        : "bg-[#6226EF]/50 text-[#6226EF]"
                    }`}
                    // Keep font-family inline if it's not in your Tailwind config
                  >
                    {user.eventStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mb-6 mt-4">
          {" "}
          {/* Increased margin here */}
          <div className="font-nunito text-[14px] leading-[19.1px]">
            Showing {Math.min(currentIndex + 1, totalUsers)}-
            {Math.min(endIndex, totalUsers)} of {totalUsers}
          </div>
          <div className="flex">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`flex items-center justify-center w-[70px] h-[30px] border rounded-l-lg ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              style={{
                background: "#FAFBFD",
                border: "0.6px solid #D5D5D5",
                padding: "0",
                opacity: 1,
              }}
            >
              &#10094; {/* Left Arrow */}
            </button>
            <button
              onClick={handleNext}
              disabled={endIndex >= totalUsers}
              className={`flex items-center justify-center w-[70px] h-[30px] border rounded-r-lg ${
                endIndex >= totalUsers ? "opacity-50 cursor-not-allowed" : ""
              }`}
              style={{
                background: "#FAFBFD",
                border: "0.6px solid #D5D5D5",
                padding: "0",
                opacity: 1,
              }}
            >
              &#10095; {/* Right Arrow */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUser;
