type Event = {
  index: number;
  name: string;
  image: string;
  fee: string;
  status: "Active" | "Inactive";
};
const AdminEventCard = ({
  event,
  handleEditEvent,
  handleDeleteEvent,
}: {
  event: Event;
  handleEditEvent: (index: number) => void;
  handleDeleteEvent: (index: number) => void;
}) => {
  return (
    <div
      key={event.index}
      className="bg-white rounded-lg shadow-md pb-1 transition-transform transform hover:scale-105 mb-4"
      style={{
        width: "361px",
        boxShadow: "6px 6px 54px 0px #0000000D",
        borderRadius: "14px 14px 0px 0px",
        opacity: "1",
      }}
    >
      <div className="relative">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-[317px] rounded-t-lg object-cover"
          style={{ borderRadius: "14px 14px 0 0" }}
        />

        <div
          className={`absolute top-2 right-2 px-2 py-1  mt-3 mr-3 text-xs font-bold font-nunito rounded-tl-md flex justify-center items-center ${
            event.status === "Active"
              ? "bg-[#00B69B] text-[#00B69B] bg-opacity-20"
              : "bg-[#FF3333] text-[#FF3333] bg-opacity-20"
          }`}
          style={{
            width: event.status === "Active" ? "52px" : "68px",
            height: "27px",
            borderRadius: "4.5px",
            color: "#FF3333",
          }}
        >
          {event.status}
        </div>
      </div>
      <div className="p-4 pt-10 pb-0">
        <div className="flex justify-between items-center mb-2">
          <p className="font-nunito text-[18px] font-bold text-gray-800">
            {event.name}
          </p>
          <button
            onClick={() => handleEditEvent(event.index)}
            className="bg-[#E2EAF8] text-[#202224] px-2 py-1 rounded-md font-nunito text-[10.15px] font-bold"
            style={{
              width: "79px",
              height: "27.54px",
            }}
          >
            Edit Event
          </button>
        </div>
        <div className="flex justify-between items-center mt-1 mb-2">
          <p className="font-nunito text-[16px] font-bold text-[#4880FF]">
            {event.fee}
          </p>
          <button
            onClick={() => handleDeleteEvent(event.index)}
            className="bg-white text-[#CD2E23] px-2 py-1 border border-[#CD2E23] rounded-md font-nunito text-[10.15px] font-bold"
            style={{
              width: "79px",
              height: "27.54px",
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminEventCard;
