const Button = ({ onClick, text }: { onClick: () => void; text: string }) => {
    return (
      <button
        onClick={onClick}
        className="rounded-[42px] bg-primary text-white text-sm md:text-base lg:text-lg px-6 py-1 hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  