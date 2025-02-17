const CustomCheckbox = ({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
}) => {
  return (
    <label className="w-full ml-4 flex items-center justify-start cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <span className="w-5 h-5 border-2 border-black rounded-md flex items-center justify-center transition duration-200 ease-in-out mr-2">
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-2 h-2 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </span>
      <span className="text-secondary text-sm sm:text-lg font-semibold">
        {label}
      </span>
    </label>
  );
};

export default CustomCheckbox;
