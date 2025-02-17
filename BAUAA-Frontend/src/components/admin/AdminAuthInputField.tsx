import React from "react";

const AdminAuthInputField = ({
  type,
  label,
  placeholder,
  value,
  onChange,
  forgetPassword,
}: {
  type: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  forgetPassword?: boolean;
}) => {
  return (
    <div className="w-full flex flex-col justify-start gap-3 mb-5">
      <div className="text-gray-500 text-md font-semibold flex justify-between">
        {label}
        {forgetPassword && (
          <span className="font-normal cursor-pointer">Forget Password?</span>
        )}
      </div>
      <input
        type={type}
        className="bg-[#f1f4f9] border border-gray-400 w-full rounded-lg h-12 p-4"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default AdminAuthInputField;
