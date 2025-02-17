import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import admin from "../../../public/picpar.png";
import "react-calendar/dist/Calendar.css";

interface Event {
  id: number;
  title: string;
  date: string;
  country: string;
  loc: string;
  attendees: number;
}

const eventColors: { [key: number]: string } = {
  1: "#FF5733",
  2: "#33FF57",
  3: "#3357FF",
  4: "#F1C40F",
  5: "#9B59B6",
};
const eventColorsback: { [key: number]: string } = {
  1: "rgba(255, 87, 51, 0.2)", // #FF5733 with 20% opacity
  2: "rgba(51, 255, 87, 0.2)", // #33FF57 with 20% opacity
  3: "rgba(51, 87, 255, 0.2)", // #3357FF with 20% opacity
  4: "rgba(241, 196, 15, 0.2)", // #F1C40F with 20% opacity
  5: "rgba(155, 89, 182, 0.2)", // #9B59B6 with 20% opacity
};

const getEventColor = (id: number): string => {
  // Check if ID exceeds the defined limit and recycle if necessary
  const colorKey = id > 5 ? id % 5 || 5 : id; // Modulo for recycling, but ensure it doesn't return 0
  return eventColors[colorKey];
};

// Function to get background color by event ID
const getEventBackgroundColor = (id: number): string => {
  // Check if ID exceeds the defined limit and recycle if necessary
  const colorKey = id > 5 ? id % 5 || 5 : id; // Modulo for recycling, but ensure it doesn't return 0
  return eventColorsback[colorKey];
};

const AdminCalendar: React.FC = () => {
  const [events] = useState<Event[]>([
    {
      id: 1,
      title: "Event One",
      date: "2024-11-01",
      country: "Lebanon",
      loc: "Saida",
      attendees: 7,
    },
    {
      id: 2,
      title: "Event Two",
      date: "2024-11-02",
      country: "Sweden",
      loc: "Beirut",
      attendees: 4,
    },
    {
      id: 3,
      title: "Event Three",
      date: "2024-11-03",
      country: "Palestine",
      loc: "Tripoli",
      attendees: 10,
    },
    {
      id: 4,
      title: "Event Four",
      date: "2024-11-04",
      country: "Germany",
      loc: "Berlin",
      attendees: 3,
    },
    {
      id: 5,
      title: "Event Five",
      date: "2024-11-05",
      country: "France",
      loc: "Paris",
      attendees: 6,
    },
    {
      id: 6,
      title: "Event Five",
      date: "2024-11-06",
      country: "France",
      loc: "Paris",
      attendees: 6,
    },
  ]);

  const [showAll, setShowAll] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const toggleShowAll = () => setShowAll(!showAll);

  const getEventsForDate = (date: Date) => {
    console.log("Date: " + date);
    const year = date.getFullYear(); // Get the full year
    const month = date.getMonth() + 1; // Get the month (0-indexed, so add 1)
    const day = date.getDate();

    return events.filter((event) => {
      console.log(
        "FornattedDate: " + `${year}-${month}-${day < 10 ? `0${day}` : day}`
      );
      console.log("Event Date: " + event.date);
      console.log(
        event.date.trim() ===
          `${year}-${month}-${day < 10 ? `0${day}` : day}`.trim()
      );

      return (
        event.date.trim() ===
        `${year}-${month}-${day < 10 ? `0${day}` : day}`.trim()
      );
    });
  };

  const goToNextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentDate(newDate);
    setActiveButton("previous");
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
    setActiveButton("next");
  };

  const goToToday = () => {
    setCurrentDate(new Date());
    console.log(new Date());
    setActiveButton("today");
  };

  return (
    <div className="flex space-x-4">
      <div className="w-[286px] h-[730px] bg-white border border-gray-300 rounded-lg overflow-auto p-4">
        <Link to="/admin/events">
          <button className="w-full h-[43px] bg-blue-600 text-white font-nunito text-sm font-bold rounded-md mb-6">
            See All Events
          </button>
        </Link>
        <p className="text-lg text-gray-800 font-bold font-nunito mb-4">
          You are going to
        </p>

        <div className="space-y-6">
          {(showAll ? events : events.slice(0, 3)).map((event) => (
            <div key={event.id} className="flex flex-col items-start pb-4">
              <div className="flex items-start w-full">
                <img
                  src={admin}
                  alt="Event"
                  className="w-[38px] h-[38px] rounded-full"
                />
                <div className="ml-4">
                  <h2 className="font-bold text-lg text-gray-800">
                    {event.title}
                  </h2>
                  <p className="text-sm text-gray-500">{event.date}</p>
                  <p className="text-sm text-gray-500">{event.loc}</p>
                  <p className="text-gray-600">{event.country}</p>
                  <div className="flex space-x-1 mt-2">
                    {[...Array(Math.min(event.attendees, 5))].map(
                      (_, index) => (
                        <img
                          key={index}
                          src={admin}
                          alt="User"
                          className="w-[20px] h-[20px] rounded-full"
                        />
                      )
                    )}
                    {event.attendees > 5 && (
                      <div className="w-[20px] h-[20px] rounded-full flex items-center justify-center border border-[#4880FF] text-[#4880FF] text-xs">
                        +{event.attendees - 5}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full mt-4 border-t border-gray-300"></div>
            </div>
          ))}

          {!showAll && events.length > 4 && (
            <div className="flex justify-center mt-4">
              <button
                onClick={toggleShowAll}
                className="w-[126px] h-[38px] bg-gray-100 border rounded-lg font-nunito font-bold text-sm text-[#202224]"
              >
                See More
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white h-[730px]  rounded-lg p-2 flex-1 border border-gray-300 relative">
        {/* Flex container for buttons and Today label */}
        <div className="flex justify-between items-center">
          <div className="text-[#202224] opacity-65 font-nunito text-[14px]  font-semibold leading-[19.1px]">
            Today
          </div>
          <div className="flex justify-end">
            <button
              onClick={goToToday}
              className={`flex items-center justify-center border text-[#202224] font-nunito border-[#D5D5D5] rounded-r-none px-3 py-1 rounded-lg ${
                activeButton === "today"
                  ? "bg-[#5A8DFF] text-white"
                  : "bg-[#F5F6FA] text-[#202224]"
              }`}
            >
              Day
            </button>
            <button
              onClick={goToNextWeek}
              className={`flex items-center justify-center font-nunito border border-[#D5D5D5] px-3 py-1 ${
                activeButton === "previous"
                  ? "bg-[#5A8DFF] text-white"
                  : "bg-[#F5F6FA] text-[#202224]"
              }`}
            >
              Week
            </button>
            <button
              onClick={goToNextMonth}
              className={`flex items-center justify-center border font-nunito border-[#D5D5D5] px-3 py-1 rounded-lg rounded-l-none ${
                activeButton === "next"
                  ? "bg-[#5A8DFF] text-white"
                  : "bg-[#F5F6FA] text-[#202224]"
              }`}
            >
              Month
            </button>
          </div>
        </div>

        <Calendar
          onChange={() => {}}
          value={currentDate}
          className="w-full border-transparent"
          tileClassName={({ date }) => {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const isPast = date < today; // Check if the date is in the past
            const isToday = date.toDateString() === today.toDateString(); // Check if the date is today

            return `relative w-[110px] h-[111px] !border-2 font-nunito border ${
              isPast ? "!text-[#B2B2B2] bg-endDate opacity-60" : ""
            } ${isToday ? "!bg-transparent !border-red-600" : ""}`; // Remove bg-endDate for today
          }}
          tileContent={({ date, view }) => {
            if (view === "month") {
              const eventsForDate = getEventsForDate(date);
              console.log(eventsForDate);

              return eventsForDate.length > 0 ? (
                <div className="relative bottom-0 right-1.5 top-9">
                  <div
                    className="border-l-4 font-nunito bg-event-pattern w-[130px] text-left"
                    style={{
                      borderColor: getEventColor(eventsForDate[0].id),
                      background: getEventBackgroundColor(eventsForDate[0].id), // Adjust opacity here
                    }}
                  >
                    <div className="text-xs text-gray-800 font-nunito">
                      {eventsForDate.map((event) => (
                        <div key={event.id} className="py-3 px-2">
                          <strong>{event.title}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null;
            }
            return null;
          }}
        />
      </div>
    </div>
  );
};

export default AdminCalendar;
