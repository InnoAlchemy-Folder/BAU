
const Partners = ({partners} : {partners: string[]}) => {
  return (
    <div>
      <div className="text-4xl text-primary font-bold mb-6 text-center">
        Partners
      </div>
      <div className=" grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-10">
        {partners.map((partner) => (
            <img src={partner} height={90} width={160} />

        ))}
        
      </div>
    </div>
  );
};

export default Partners;
