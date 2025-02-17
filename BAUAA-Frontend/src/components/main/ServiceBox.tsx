
const ServiceBox = ({ title, list }: { title: string; list: string[] }) => {
  return (
    <div>
      <p className="text-secondary text-2xl font-semibold ml-5">{title}</p>
      <div className="relative h-[100px] bg-gradient-primary-secondary rounded-[10px]">
        <div className="absolute top-0 left-0 right-0 bottom-5 bg-gradient-opacity"></div>
        <div className="absolute top-0 left-1 right-1 bottom-1 bg-[#eaebf3] rounded-[5px]">
          <ul className="absolute bottom-1/4 ml-5 list-disc list-inside space-y-1 text-primary text-l font-semibold">
            {list.map((data) => (
              <li>{data}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
