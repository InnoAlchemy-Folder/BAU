const EmptyButton = ({
  onClick,
  text,
}: {
  onClick: () => void;
  text: string;
}) => {
  return (
    <button
      onClick={onClick}
      className="rounded-[42px] border-2 border-primary text-white px-4 py-2 bg-transparent hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary transition duration-300 ease-in-out hover:bg-primary text-base md:text-lg lg:text-xl"
    >
      {text}
    </button>
  );
};

export default EmptyButton;
