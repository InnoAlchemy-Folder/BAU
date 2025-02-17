import React, { useState } from "react";
import admin from "../../../public/picpar.png";
import AdminTitle from "../../components/admin/AdminTitle";
import AdminEventGrid from "../../components/admin/AdminEventGrid";
import AdminCalendar from "./AdminCalender";

type Event = {
  index: number;
  name: string;
  image: string;
  fee: string;
  date: string;
  status: "Active" | "Inactive";
};
type AdminEventsProps = {
  showStatus?: boolean;
  showEvent?: boolean;
};

const AdminEvents: React.FC<AdminEventsProps> = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const [events, setEvents] = useState<Event[]>([
    {
      index: 0,
      name: "Event One",
      image: admin,
      fee: "$20",
      date: "2024-10-1",
      status: "Active",
    },
    {
      index: 1,
      name: "Event Two",
      image: admin,
      fee: "$15",
      date: "2024-10-1",
      status: "Active",
    },
    {
      index: 2,
      name: "Event Three",
      image: admin,
      fee: "$25",
      date: "2024-10-1",
      status: "Active",
    },
    {
      index: 3,
      name: "Event Four",
      date: "2024-10-1",
      image: admin,
      fee: "$30",
      status: "Inactive",
    },
  ]);
  const [newEvent, setNewEvent] = useState<Event>({
    index: events.length + 1,
    name: "",
    image: "",
    fee: "",
    date: "",
    status: "Active",
  });

  const handleAddEvent = () => {
    if (newEvent.name.trim() && newEvent.image.trim() && newEvent.fee.trim()) {
      setEvents([...events, newEvent]);
      setNewEvent({
        index: events.length + 1,
        name: "",
        image: "",
        fee: "",
        date: "",
        status: "Active",
      });
      setShowModal(false);
    } else {
      alert("Please provide name, image, and fee for the event.");
    }
  };

  const handleDeleteEvent = (index: number) => {
    setEvents(events.filter((event, i) => event.index !== index));
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

  return (
    <div className="flex-1 p-6 w-full">
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

      <AdminTitle
        title="Events"
        buttonText="Add New Event"
        buttonOnClick={() => setShowModal(true)}
      />
      {location.pathname == "/admin/events" && (
        <AdminEventGrid
          events={events}
          handleDeleteEvent={(index: number) => handleDeleteEvent(index)}
          handleEditEvent={(index: number) => handleEditEvent(index)}
        />
      )}
      {location.pathname == "/admin/cal" && <AdminCalendar />}
    </div>
  );
};
export default AdminEvents;
