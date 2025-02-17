import React from "react";

const AdminTitle = ({
  title,
  buttonText,
  buttonOnClick,
}: {
  title: string;
  buttonText?: string;
  buttonOnClick?: () => void;
}) => {
  return (
    <div className="flex justify-between items-center mb-6 ">
      <h1 className="text-[32px] font-bold text-gray-800 font-nunito">
        {title}
      </h1>

      {buttonText && (
        <button
          onClick={buttonOnClick}
          className="px-4 py-2 bg-[#4379EE] text-white rounded-md hover:bg-blue-600 transition duration-200"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default AdminTitle;
