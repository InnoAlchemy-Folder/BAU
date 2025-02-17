import ServiceBox from "./ServiceBox";

type ServiceData = {
  title: string;
  list: string[];
};

const WhatYouGet = ({
  title,
  text,
  services,
}: {
  title: string;
  text: string;
  services: ServiceData[];
}) => {
  return (
    <div className="flex flex-col w-[100%] justify-start items-center gap-5 mb-10">
      <p className="text-primary text-4xl font-bold">{title}</p>
      <p className="text-primary text-2xl text-justify w-[65%]">{text}</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 w-[75%] mt-12 gap-14 gap-y-20">
        {services.map((service) => (
          <ServiceBox title={service.title} list={service.list} />
        ))}
      </div>
    </div>
  );
};

export default WhatYouGet;
