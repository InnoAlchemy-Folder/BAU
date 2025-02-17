
import Button from "./Button";
import BoardMemberCard from "./BoardMemberCard";

type BoardMember = {
  name: string;
  position: string;
  img: string;
};
const BoardMemberListing = ({
  title,
  boardMembers,
}: {
  title: string;
  boardMembers: BoardMember[];
}) => {
  return (
    <div>
      <div className="text-4xl text-primary font-bold mb-6">{title}</div>
      <div className="flex flex-col items-center gap-y-6">
        {/* Responsive Flexbox for Large Screens and Grid for Smaller Screens */}
        <div className="flex flex-wrap justify-center gap-10 max-w-full md:flex-row sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {boardMembers.slice(0, 4).map((member) => (
            <BoardMemberCard
              name={member.name}
              position={member.position}
              img={member.img}
            />
          ))}
        </div>
        <Button onClick={() => {}} text="View All" />
      </div>
    </div>
  );
};

export default BoardMemberListing;
