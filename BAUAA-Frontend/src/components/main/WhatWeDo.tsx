const WhatWeDo = ({
  img,
  title,
  text,
}: {
  img: string;
  title: string;
  text: string;
}) => {
  return (
    <div className="flex flex-col 2xl:flex-row items-center gap-10 md:gap-20 p-5 md:p-10">
      <img
        src={img}
        alt="Who We Are"
        className="w-full md:w-1/2 object-cover rounded-md"
      />

      <div className="flex flex-col gap-5 w-full md:w-1/2">
        <div className="text-lg md:text-xl p-5 md:p-10 border border-secondary bg-transparent text-primary rounded-[10px]">
          <p className="mb-5 text-2xl md:text-3xl lg:text-4xl font-semibold">
            {title}
          </p>
          <p className="xl:text-xl md:text-lg ">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
