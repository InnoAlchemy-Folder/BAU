
const BoardMemberCard = ({
  name,
  position,
  img,
}: {
  name: string;
  position: string;
  img: string;
}) => {
  return (
    <div className="bg-white rounded-[20px] shadow-lg p-4 flex flex-col items-center w-[210px] h-[250px]">
      <img
        src={img}
        alt={`${name}'s photo`}
        className="rounded-full w-[90%] aspect-square object-cover mb-2"
      />
      <div className="text-center">
        <h3 className="text-lg font-semibold text-primary">{name}</h3>
        <h3 className="text-sm font-regular text-primary">{position}</h3>
      </div>
    </div>
  );
};

export default BoardMemberCard;
