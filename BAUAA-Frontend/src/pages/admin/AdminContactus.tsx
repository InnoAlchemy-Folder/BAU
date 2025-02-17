import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import read from "../../../public/read.png";
import del from "../../../public/delete.png";
import ser from "../../../public/search.png"; // Ensure this is the correct path

interface Message {
  id: number;
  sender: string;
  content: string;
  time: string;
  isFavorite: boolean;
  isRead: boolean;
}

const AdminContactus: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "John Doe",
      content: "Hello, I need help with...",
      time: "10:00 AM",
      isFavorite: false,
      isRead: false,
    },
    {
      id: 2,
      sender: "Jane Smith",
      content: "How do I...",
      time: "11:00 AM",
      isFavorite: true,
      isRead: true,
    },
  ]);
  const [selectedMessages, setSelectedMessages] = useState<number[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  const handleFavoriteToggle = (id: number) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id ? { ...msg, isFavorite: !msg.isFavorite } : msg
      )
    );
  };

  const handleDelete = () => {
    setMessages((prev) =>
      prev.filter((msg) => !selectedMessages.includes(msg.id))
    );
    setSelectedMessages([]);
  };

  const toggleSelectMessage = (id: number) => {
    setSelectedMessages((prev) =>
      prev.includes(id) ? prev.filter((msgId) => msgId !== id) : [...prev, id]
    );
  };

  const markAsRead = () => {
    setMessages((prev) =>
      prev.map((msg) =>
        selectedMessages.includes(msg.id) ? { ...msg, isRead: true } : msg
      )
    );
    setSelectedMessages([]);
  };

  return (
    <div className="p-6">
      <h1 className="text-left text-4xl font-semibold text-[#202224] font-nunito mb-9">
        Inbox
      </h1>
      <div className="relative bg-white rounded-[18.2px] w-full md:max-w-[1084px] h-[521px] border-t-[0.39px] overflow-y-auto">
        <div className="ml-8 mt-5 mr-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Search Bar */}
          <div className="relative w-full md:w-1/2">
            <img
              src={ser}
              alt="Search"
              className="absolute left-3 top-3 w-5 h-5"
            />
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search Message"
              className="w-full pl-10 p-3 rounded-[26px] border border-[#D5D5D5] bg-[#F5F6FA]"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-0">
            <button
              className="w-10 h-10 flex items-center justify-center rounded-lg rounded-r-none border border-[#D5D5D5] bg-[#F5F6FA]"
              onClick={markAsRead}
              aria-label="Mark as Read"
            >
              <img src={read} alt="Mark as Read" width="18.8" height="18.8" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center border border-[#D5D5D5] bg-[#F5F6FA]"
              onClick={() => setShowFavorites((prev) => !prev)}
              aria-label="Toggle Favorites"
            >
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-400 w-[20.8]"
              />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-lg rounded-l-none border border-[#D5D5D5] bg-[#F5F6FA]"
              onClick={handleDelete}
              aria-label="Delete"
            >
              <img src={del} alt="Delete" width="15.8" height="15.8" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="mt-6">
          {messages
            .filter((msg) => {
              const matchesSearch = msg.sender
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
              const matchesFavorites = showFavorites ? msg.isFavorite : true;
              return matchesSearch && matchesFavorites;
            })
            .map((msg) => (
              <div
                key={msg.id}
                className={`flex items-center justify-between p-4 border border-[#E0E0E0] ${
                  msg.isRead ? "bg-white" : "bg-[#4880FF] bg-opacity-6"
                }`}
              >
                <div className="flex items-center space-x-2">
                  {/* Checkbox */}
                  <input
                    type="checkbox"
                    className="w-5 h-5 mr-4 text-black accent-black"
                    checked={selectedMessages.includes(msg.id)}
                    onChange={() => toggleSelectMessage(msg.id)}
                  />

                  {/* Favorite Star */}
                  <button onClick={() => handleFavoriteToggle(msg.id)}>
                    <FontAwesomeIcon
                      icon={faStar}
                      className={`${
                        msg.isFavorite
                          ? "text-yellow-500 mr-4"
                          : "text-gray-300 mr-4"
                      } text-lg`}
                    />
                  </button>
                </div>

                {/* Message Content */}
                <div className="flex-1 px-4 flex items-center font-nunito">
                  <div className="font-bold font-nunito mr-8">{msg.sender}</div>
                  <div className=" font-extralight opacity-90 ml-10 font-nunito">
                    {msg.content}
                  </div>
                </div>

                {/* Time */}
                <div className="text-right font-nunito opacity-70">
                  {msg.time}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdminContactus;
