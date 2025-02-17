import { useNavigate } from "react-router-dom";
import Button from "./Button";
import EventCard from "./EventCard";

type Event = {
  title: string;
  img: string;
  color: string;
  status: string;
  date: string;
};
const LatestEventsListing = ({
  title,
  events,
}: {
  title: string;
  events: Event[];
}) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="text-4xl text-primary font-bold mb-6">{title}</div>
      <div className="flex flex-col items-center gap-y-6">
        {/* Responsive Flexbox for Large Screens and Grid for Smaller Screens */}
        <div className="flex flex-wrap justify-center gap-10 max-w-full md:flex-row sm:grid grid-cols-1 custom-xl:grid-cols-3">
          {events.slice(0, 3).map((event) => (
            <EventCard
              title={event.title}
              img={event.img}
              eventDate={event.date}
              status={event.status}
              color={event.color}
            />
          ))}
        </div>
        <Button
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/events");
          }}
          text="View All"
        />
      </div>
    </div>
  );
};

export default LatestEventsListing;
