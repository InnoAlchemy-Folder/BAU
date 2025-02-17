import { useNavigate } from "react-router-dom";

const WhoWeAre = ({
  img,
  title,
  text,
  button,
}: {
  img: string;
  title: string;
  text: string;
  button?: boolean;
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col 2xl:flex-row items-center gap-10 md:gap-20 p-5 md:p-10">
      <img
        src={img}
        alt="Who We Are"
        className="w-full md:w-1/2 object-cover rounded-md"
      />

      <div className="flex flex-col gap-5 w-full md:w-1/2">
        <div className="text-lg md:text-xl p-5 md:p-10 bg-secondary text-white rounded-[10px]">
          <p className="mb-5 text-2xl md:text-3xl lg:text-4xl font-semibold">
            {title}
          </p>
          <p className="text-base md:text-lg">{text}</p>
        </div>
        {button && (
          <button
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/aboutus");
            }}
            className="w-full h-16 md:h-20 px-4 py-2 bg-white text-lg md:text-xl text-primary border border-secondary rounded-md hover:bg-secondary hover:text-white transition duration-300"
          >
            Discover More About BAUAA
          </button>
        )}
      </div>
    </div>
  );
};

export default WhoWeAre;
