import React, { useState } from "react";
import board from "../../../public/picpar.png"; // Default image for new members
import backgr from "../../../public/Bg.png";

interface Member {
  name: string;
  email: string;
  position: string;
  image: string; // Added image field
}

const AdminBoard: React.FC = () => {
  // Initialize members with 4 default members, including image and position
  const [members, setMembers] = useState<Member[]>([
    {
      name: "Member One",
      email: "memberone@example.com",
      position: "Position One",
      image: board, // Default image
    },
    {
      name: "Member Two",
      email: "membertwo@example.com",
      position: "Position Two",
      image: board, // Default image
    },
    {
      name: "Member Three",
      email: "memberthree@example.com",
      position: "Position Three",
      image: board, // Default image
    },
    {
      name: "Member Four",
      email: "memberfour@example.com",
      position: "Position Four",
      image: board, // Default image
    },
  ]);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [newMember, setNewMember] = useState<Member>({
    name: "",
    email: "",
    position: "",
    image: board, // Initialize with default image
  });

  const handleAddMember = () => {
    if (
      newMember.name.trim() &&
      newMember.email.trim() &&
      newMember.position.trim()
    ) {
      setMembers([...members, newMember]);
      setNewMember({ name: "", email: "", position: "", image: board }); // Reset new member state
      setShowModal(false);
    } else {
      alert("Please provide name, email, and position.");
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Here we will assert that reader.result can be a string
        const result = reader.result as string; // Type assertion
        setNewMember((prev) => ({ ...prev, image: result })); // Set image to result
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  return (
    <div className="flex-1 p-6 w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[32px] font-bold text-gray-800 font-nunito">
          Board Members
        </h1>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-[#4379EE] text-white rounded-md hover:bg-blue-600 transition duration-200 font-nunito"
        >
          Add New Member
        </button>
      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full font-nunito">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg flex flex-col items-center justify-center p-4 transition-transform transform hover:scale-105 font-nunito"
            style={{
              boxShadow: "6px 6px 54px 0px #00000008",
              width: "100%", // Allow full width of grid column
              height: "320px",
              backgroundImage: `url(${backgr})`,
            }}
          >
            <img
              src={member.image} // Use the member's image
              alt={member.name}
              className="w-28 h-28 rounded-full object-cover"
            />
            <p
              className="text-gray-800 mt-3 text-center font-bold font-nunito"
              style={{
                fontSize: "14px",
                lineHeight: "19.1px",
                letterSpacing: "-0.05px",
                color: "#202224",
              }}
            >
              {member.name}
            </p>
            <p
              className="text-gray-800 mt-2 text-center font-nunito" // Increased margin
              style={{
                fontSize: "14px",
                lineHeight: "19.1px",
                letterSpacing: "-0.05px",
                color: "#202224",
                opacity: 0.6, // Set opacity to 60%
              }}
            >
              {member.position}
            </p>
            <p
              className="text-gray-800 mt-2 text-center font-nunito"
              style={{
                fontSize: "14px",
                lineHeight: "19.1px",
                letterSpacing: "-0.05px",
                color: "#202224",
                opacity: 0.8,
                whiteSpace: "normal", // Allow text to wrap
                wordBreak: "break-word", // Break long words if necessary
                maxWidth: "100%", // Ensure it fits within grid column
              }}
            >
              {member.email}
            </p>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 font-nunito">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Add New Member</h2>
            <input
              type="text"
              placeholder="Member Name"
              value={newMember.name}
              onChange={(e) =>
                setNewMember({ ...newMember, name: e.target.value })
              }
              className="border p-2 mb-6 w-full rounded-md" // Increased margin
            />
            <input
              type="email"
              placeholder="Member Email"
              value={newMember.email}
              onChange={(e) =>
                setNewMember({ ...newMember, email: e.target.value })
              }
              className="border p-2 mb-6 w-full rounded-md " // Increased margin
            />
            <input
              type="text"
              placeholder="Position"
              value={newMember.position}
              onChange={(e) =>
                setNewMember({ ...newMember, position: e.target.value })
              }
              className="border p-2 mb-6 w-full rounded-md" // Increased margin
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="border p-2 mb-6 w-full rounded-md" // Increased margin
            />
            <div className="flex justify-end">
              <button
                onClick={handleAddMember}
                className="bg-[#4379EE] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Add
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="ml-2 bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBoard;
