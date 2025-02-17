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
  ]);

  const [showAll, setShowAll] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const toggleShowAll = () => setShowAll(!showAll);

  const getEventsForDate = (date: Date) => {
    const formattedDate = date.toISOString().split("T")[0];
    return events.filter((event) => event.date === formattedDate);
  };

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
    setActiveButton("previous");
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
    setActiveButton("next");
  };

  const goToToday = () => {
    setCurrentDate(new Date());
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

      <div
        className="flex-1 h-[730px] border border-gray-300 rounded-lg"
        style={{ width: "784px" }}
      >
        <div className="bg-white h-[730px] rounded-t-lg p-2">
          {/* Flex container for buttons */}
          <div className="flex justify-end mb-4 ">
            <button
              onClick={goToPreviousMonth}
              className={`flex items-center justify-center border text-[#202224] font-nunito border-[#D5D5D5] rounded-r-none px-3 py-1 rounded-lg ${
                activeButton === "previous"
                  ? "bg-[#5A8DFF] text-white"
                  : "bg-[#F5F6FA] text-[#202224]"
              }`}
            >
              Day
            </button>
            <button
              onClick={goToToday}
              className={`flex items-center justify-center font-nunito border border-[#D5D5D5] px-3 py-1 ${
                activeButton === "today"
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

          <Calendar
          onChange={() => {}}
          value={currentDate}
          className="w-full h-full border-transparent "
          tileClassName={({ date }) => {
            const isPast = date < new Date();
            return `w-[110px] h-[111px] border-b-0 font-nunito ${
              isPast ? "bg-gray-200 text-gray-500  " : ""
            }`;
          }}
          tileContent={({ date, view }) => {
            if (view === "month") {
              const eventsForDate = getEventsForDate(date);
              return eventsForDate.length > 0 ? (
                <div className="relative font-nunito">
                  <div
                    className="border-l-4 font-nunito"
                    style={{
                      borderColor: eventColors[eventsForDate[0].id],
                      background: eventColorsback[eventsForDate[0].id], // Adjust opacity here
                      paddingLeft: "8px",
                      margin: "2px",
                      borderRadius: "4px",
                    }}
                  >
                    <div className="text-xs text-gray-800 font-nunito">
                      {eventsForDate.map((event) => (
                        <div key={event.id} className="my-1">
                          <strong>{event.title}</strong> - {event.country}
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
    </div>
  );
};

export default AdminCalendar;
