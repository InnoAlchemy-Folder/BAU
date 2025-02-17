import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Alumni = ({
  title,
  text,
  img,
  buttonText,
  buttonLink,
}: {
  title: string;
  text: string;
  img: string;
  buttonText: string;
  buttonLink: string;
}) => {
  const navigate = useNavigate();
  return (
    <div className="relative h-[70vh] md:h-[60vh] lg:h-[40vh] w-full flex flex-col justify-center items-center text-center text-white p-6 rounded-3xl gap-5 overflow-hidden">
      {/* Image Tag for Background */}
      <img
        src={img}
        alt="Alumni Background"
        className="absolute inset-0 w-full h-full object-cover rounded-3xl z-0" // Positioning and sizing
      />
      {/* Overlay for Text */}
      <div className="relative z-10 space-y-5">
        <div className="text-4xl md:text-3xl capitalize font-bold">{title}</div>
        <p className="text-sm md:text-lg px-4 md:px-20 text-justify">{text}</p>
        <Button
          onClick={() => {
            navigate(buttonLink);
          }}
          text={buttonText}
        />
      </div>
    </div>
  );
};

export default Alumni;
