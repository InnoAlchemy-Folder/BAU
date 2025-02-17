import AdminEventCard from "./AdminEventCard";

type Event = {
  index: number;
  name: string;
  image: string;
  fee: string;
  status: "Active" | "Inactive";
};
const AdminEventGrid = ({
  events,
  handleEditEvent,
  handleDeleteEvent,
}: {
  events: Event[];
  handleEditEvent: (index: number) => void;
  handleDeleteEvent: (index: number) => void;
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3  xl:gap-1  gap-1 w-full  ">
      {events.map((event) => (
        <AdminEventCard
          key={event.index}
          event={event}
          handleEditEvent={(index: number) => handleEditEvent(index)}
          handleDeleteEvent={(index: number) => handleDeleteEvent(index)}
        />
      ))}
    </div>
  );
};

export default AdminEventGrid;
