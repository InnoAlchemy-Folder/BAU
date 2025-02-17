
const WhyBau = ({ title, text }: { title: string; text: string }) => {
  return (
    <div>
      <div className="text-4xl text-primary font-bold mb-4">{title}</div>
      <div className="text-xl xl:text-2xl text-primary mb-4">{text}</div>
    </div>
  );
};

export default WhyBau;
