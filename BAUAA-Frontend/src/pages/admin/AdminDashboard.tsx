import React, { useState } from "react";
import activeuser from "../../../public/acus.png";
import activeEvent from "../../../public/acev.png";
import totalDonation from "../../../public/todo.png";
import totalSales from "../../../public/tosa.png";
import up from "../../../public/saleup.png";
import down from "../../../public/saledown.png";
import admin from "../../../public/admin.png";
import AdminEventGrid from "../../components/admin/AdminEventGrid";
type Event = {
  index: number;
  name: string;
  image: string;
  fee: string;
  date: string;
  status: "Active" | "Inactive";
};
const AdminDashboard: React.FC = () => {
  // Example state with data that varies
  const [showModal, setShowModal] = useState<boolean>(false);

  const [events, setEvents] = useState<Event[]>([
    {
      index: 0,
      name: "Event One",
      image: admin,
      date: "2024-10-12",
      fee: "$20",
      status: "Active",
    },
    {
      index: 1,
      name: "Event Two",
      image: admin,
      date: "2024-10-12",
      fee: "$15",
      status: "Active",
    },
    {
      index: 2,
      name: "Event Three",
      image: admin,
      fee: "$25",
      date: "2024-10-12",
      status: "Active",
    },
    {
      index: 3,
      name: "Event Four",
      image: admin,
      fee: "$30",
      date: "2024-10-12",
      status: "Inactive",
    },
  ]);
  const [newEvent, setNewEvent] = useState<Event>({
    index: events.length + 1,
    name: "",
    image: "",
    fee: "",
    date: "2024-10-12",
    status: "Active",
  });

  const handleAddEvent = () => {
    if (newEvent.name.trim() && newEvent.image.trim() && newEvent.fee.trim()) {
      setEvents([...events, newEvent]);
      setNewEvent({
        index: events.length + 1,
        name: "",
        image: "",
        date: "",
        fee: "",
        status: "Active",
      });
      setShowModal(false);
    } else {
      alert("Please provide name, image, and fee for the event.");
    }
  };

  const handleDeleteEvent = (index: number) => {
    setEvents(events.filter((event) => event.index !== index));
  };

  const handleEditEvent = (index: number) => {
    const eventToEdit = events[index];
    setNewEvent(eventToEdit);
    setShowModal(true);
    handleDeleteEvent(index);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewEvent((prev) => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  
  const [stats, setStats] = useState([
    {
      count: 120,
      percent: 8.5,
      changeText: "Up from yesterday",
    },
    {
      count: 15,
      percent: 5,
      changeText: "Up from yesterday",
    },
    {
      count: 3450,
      percent: -2,
      changeText: "Down from yesterday",
    },
    {
      count: 7890,
      percent: 1.5,
      changeText: "Up from yesterday",
    },
  ]);

  return (
    <div className="flex flex-col space-y-4 md:space-y-4">
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Add New Event</h2>
            <input
              type="text"
              placeholder="Event Name"
              value={newEvent.name}
              onChange={(e) =>
                setNewEvent({ ...newEvent, name: e.target.value })
              }
              className="border p-2 mb-4 w-full rounded-md"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="border p-2 mb-4 w-full rounded-md"
            />
            <input
              type="text"
              placeholder="Event Fee"
              value={newEvent.fee}
              onChange={(e) =>
                setNewEvent({ ...newEvent, fee: e.target.value })
              }
              className="border p-2 mb-4 w-full rounded-md"
            />
            <input
              type="date"
              placeholder="Event Date"
              value={newEvent.fee}
              onChange={(e) =>
                setNewEvent({ ...newEvent, date: e.target.value })
              }
              className="border p-2 mb-4 w-full rounded-md"
            />
            <select
              value={newEvent.status}
              onChange={(e) =>
                setNewEvent({
                  ...newEvent,
                  status: e.target.value as "Active" | "Inactive",
                })
              }
              className="border p-2 mb-4 w-full rounded-md"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <div className="flex justify-end">
              <button
                onClick={handleAddEvent}
                className="bg-[#4379EE] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Save Event
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

      <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-center md:justify-start gap-4">
        {/* Active Users Box */}
        <div className="w-full  h-[161px] rounded-[14px] bg-white shadow-[6px_6px_54px_0px_#0000000D] p-4 flex flex-col justify-between mx-2 mb-4">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="font-nunito text-[16px] font-semibold leading-[21.82px] text-left text-[#202224] opacity-70">
                Active Users
              </h2>
              <div className="relative w-[60px] h-[60px] rounded-full flex justify-center items-center ml-2 ">
                <div className="absolute inset-0 bg-[#4880FF] rounded-[23px] opacity-[0.21]" />
                <img
                  src={activeuser}
                  alt="Active Users Icon"
                  className="relative w-[28px] h-[28px] object-contain rounded-full"
                />
              </div>
            </div>
            <p className="font-nunito text-[28px] leading-[38.19px] tracking-[1px] text-left">
              {stats[0].count}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-nunito text-left flex items-center">
              <img
                src={stats[0].percent > 0 ? up : down}
                alt="Change Indicator"
                className="w-[16px] h-[16px] mr-1"
              />
              <span
                className={
                  stats[0].percent > 0 ? "text-[#00B69B]" : "text-red-500"
                }
              >
                {Math.abs(stats[0].percent)}%
              </span>
              <span className="ml-1">{stats[0].changeText}</span>
            </p>
          </div>
        </div>

        {/* Active Events Box */}
        <div className="w-full  h-[161px] rounded-[14px] bg-white shadow-[6px_6px_54px_0px_#0000000D] p-4 flex flex-col justify-between mx-2 md:mx-0 mb-4">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="font-nunito text-[16px] font-semibold leading-[21.82px] text-left text-[#202224] opacity-70">
                Active Events
              </h2>
              <div className="relative w-[60px] h-[60px] rounded-full flex justify-center items-center ml-2">
                <div className="absolute inset-0 bg-[#4880FF] rounded-[23px] opacity-[0.21]" />
                <img
                  src={activeEvent}
                  alt="Active Events Icon"
                  className="relative w-[28px] h-[28px] object-contain"
                />
              </div>
            </div>
            <p className="font-nunito text-[28px] leading-[38.19px] tracking-[1px] text-left">
              {stats[1].count}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-nunito text-left flex items-center">
              <img
                src={stats[1].percent > 0 ? up : down}
                alt="Change Indicator"
                className="w-[16px] h-[16px] mr-1"
              />
              <span
                className={
                  stats[1].percent > 0 ? "text-[#00B69B]" : "text-red-500"
                }
              >
                {Math.abs(stats[1].percent)}%
              </span>
              <span className="ml-1">{stats[1].changeText}</span>
            </p>
          </div>
        </div>

        {/* Total Donations Box */}
        <div className="w-full  h-[161px] rounded-[14px] bg-white shadow-[6px_6px_54px_0px_#0000000D] p-4 flex flex-col justify-between mx-2 md:mx-0 mb-4">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="font-nunito text-[16px] font-semibold leading-[21.82px] text-left text-[#202224] opacity-70">
                Total Donations
              </h2>
              <div className="relative w-[60px] h-[60px] rounded-full flex justify-center items-center ml-2">
                <div className="absolute inset-0 bg-[#4880FF] rounded-[23px] opacity-[0.21]" />
                <img
                  src={totalDonation}
                  alt="Total Donations Icon"
                  className="relative w-[28px] h-[28px] object-contain rounded-full"
                />
              </div>
            </div>
            <p className="font-nunito text-[28px] leading-[38.19px] tracking-[1px] text-left">
              ${stats[2].count.toLocaleString()}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-nunito text-left flex items-center">
              <img
                src={stats[2].percent > 0 ? up : down}
                alt="Change Indicator"
                className="w-[16px] h-[16px] mr-1"
              />
              <span
                className={
                  stats[2].percent > 0 ? "text-[#00B69B]" : "text-red-500"
                }
              >
                {Math.abs(stats[2].percent)}%
              </span>
              <span className="ml-1">{stats[2].changeText}</span>
            </p>
          </div>
        </div>

        {/* Total Sales Box */}
        <div className="w-full  h-[161px] rounded-[14px] bg-white shadow-[6px_6px_54px_0px_#0000000D] p-4 flex flex-col justify-between mx-2 md:mx-0 mb-4">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="font-nunito text-[16px] font-semibold leading-[21.82px] text-left text-[#202224] opacity-70">
                Total Sales
              </h2>
              <div className="relative w-[60px] h-[60px] rounded-full flex justify-center items-center ml-2">
                <div className="absolute inset-0 bg-[#4880FF] rounded-[23px] opacity-[0.21]" />
                <img
                  src={totalSales}
                  alt="Total Sales Icon"
                  className="relative w-[28px] h-[28px] object-contain"
                />
              </div>
            </div>
            <p className="font-nunito text-[28px] leading-[38.19px] tracking-[1px] text-left">
              ${stats[3].count.toLocaleString()}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-nunito text-left flex items-center">
              <img
                src={stats[3].percent > 0 ? up : down}
                alt="Change Indicator"
                className="w-[16px] h-[16px] mr-1"
              />
              <span
                className={
                  stats[3].percent > 0 ? "text-[#00B69B]" : "text-red-500"
                }
              >
                {Math.abs(stats[3].percent)}%
              </span>
              <span className="ml-1">{stats[3].changeText}</span>
            </p>
          </div>
        </div>
      </div>
      <AdminEventGrid
        events={events}
        handleDeleteEvent={(index: number) => handleDeleteEvent(index)}
        handleEditEvent={(index: number) => handleEditEvent(index)}
      />
      {/* Place AdminEvents component below stats */}
    </div>
  );
};

export default AdminDashboard;
