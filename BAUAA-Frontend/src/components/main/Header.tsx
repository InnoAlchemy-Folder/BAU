import Button from "./Button";
import EmptyButton from "./EmptyButton";

const Header = ({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="relative w-full h-[80vh]">
      <img
        src={img}
        className="absolute top-0 left-0 object-cover w-full h-full"
        alt="Header Background"
      />
      <div className="flex flex-col items-center justify-center h-full gap-y-5 relative ">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-2">
          {title}
        </h1>
        <h3 className="text-white text-lg md:text-xl lg:text-2xl text-center">
          {description}
        </h3>
        <div className="flex gap-x-5">
          <Button onClick={() => {}} text="Start membership" />
          <EmptyButton onClick={() => {}} text="Explore Alumni Benefits" />
        </div>
      </div>
    </div>
  );
};

export default Header;
