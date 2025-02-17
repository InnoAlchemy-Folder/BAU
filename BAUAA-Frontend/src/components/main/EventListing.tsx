import EventCard from "./EventCard";
type Event = {
  title: string;
  img: string;
  color: string;
  status: string;
  date: string;
};
type Category = {
  title: string;
  selected: boolean;
};
const EventListing = ({
  title,
  categories,
  events,
  onCategoryClick,
}: {
  title: string;
  categories: Category[];
  events: Event[];
  onCategoryClick: (index: number) => void;
}) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <div className="text-2xl md:text-3xl lg:text-4xl text-primary font-bold mb-4 md:mb-0">
          {title}
        </div>
        <div className="flex flex-wrap gap-3 md:gap-5">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 md:px-8 md:py-3 flex items-center justify-center rounded-full text-xs md:text-sm lg:text-base
          ${
            category.selected
              ? "bg-primary text-white"
              : "text-primary border border-primary"
          }`}
              onClick={() => onCategoryClick(index)}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-6">
        {/* Responsive Flexbox for Large Screens and Grid for Smaller Screens */}
        <div className="flex flex-wrap justify-center gap-10 max-w-full md:flex-row sm:grid grid-cols-2 custom-xl:grid-cols-3">
          {events.map((event) => (
            <EventCard
              title={event.title}
              img={event.img}
              eventDate={event.date}
              status={event.status}
              color={event.color}
            />
          ))}
        </div>
        {/* <Button onClick={() => {}} text="View All" /> */}
      </div>
    </div>
  );
};

export default EventListing;
