import { useState } from "react";
import { OtpInput } from "reactjs-otp-input";
import NewPassword from "./NewPassword";

const VerifyEmail = ({ email }: { email: string }) => {
  const [otp, setOtp] = useState("");
  const [changePassword, setChangePassword] = useState(false);
  const handleChange = (otp: string) => setOtp(otp);

  const toggleChangePassword = () => {
    setChangePassword(true);
  };
  return !changePassword ? (
    <div className=" flex-grow flex-col flex items-center justify-center mt-40 gap-3 my-10 mx-5">
      <div className="text-xl md:text-2xl  lg:text-3xl xl:text-4xl text-primary font-bold">
        Verify Your Email
      </div>
      <div className="text-secondary  font-normal text-xl">
        Enter the pin code sent to the email address{" "}
        {email.replace(/(\w{2})[\w.-]+@/, "$1*******@")}
      </div>
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={6}
        separator={<span></span>}
        className="my-10"
        shouldAutoFocus={true}
        inputStyle="rounded-md outline-none text-primary text-3xl focus:border-2 bg-transparent border border-black focus:border-primary w-[50px] h-[70px]"
        containerStyle="flex gap-3"
        isInputNum={true}
      />

      <button
        onClick={() => {
          toggleChangePassword();
        }}
        className="w-full bg-primary text-white py-3 rounded-2xl "
      >
        Verify
      </button>
      <div
        onClick={() => {}}
        className="flex gap-5 text-sm sm:text-lg  cursor-pointer mt-2"
      >
        <div>Didn't receive the code?</div>
        <div className="text-secondary hover:underline">Resend again</div>
      </div>
    </div>
  ) : (
    <NewPassword />
  );
};

export default VerifyEmail;
