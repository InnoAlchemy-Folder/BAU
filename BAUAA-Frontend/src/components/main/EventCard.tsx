
const EventCard = ({
  img,
  status,
  color,
  eventDate,
  title,
}: {
  img: string;
  status: string;
  color: string;
  eventDate: string;
  title: string;
}) => {
  return (
    <div className="p-10 w-[350px] bg-white rounded-[25px] shadow-lg overflow-hidden flex flex-col">
      {/* Set fixed width */}
      {/* Card Image */}
      <div className="relative">
        <img
          src={img}
          alt={title}
          className="w-full h-52 object-cover rounded-[15px]"
        />

        <span
          className={`absolute top-2 left-2 text-white text-sm px-5 py-2 rounded-full`}
          style={{
            backgroundColor: color,
          }}
        >
          {status}
        </span>
      </div>
      {/* Card Content */}
      <div className="pt-4 mx-4 flex flex-col flex-grow">
        <p className="text-gray-500 text-xs mb-2">Event Date: {eventDate}</p>
        <h3 className="text-md font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="mt-auto">
          {/* Ensures "Read More" is at the bottom */}
          <a href="#" className="text-primary font-bold text-sm hover:underline">
            Read More &#8594;
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
