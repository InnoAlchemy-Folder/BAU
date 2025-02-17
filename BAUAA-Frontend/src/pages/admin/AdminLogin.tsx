import { useState } from "react";
import AdminAuthCheckBox from "../../components/admin/AdminAuthCheckBox";
import AdminAuthInputField from "../../components/admin/AdminAuthInputField";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChanges = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChanges = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="w-screen h-screen bg-secondary bg-admin-auth bg-no-repeat bg-cover flex justify-center items-center">
      <div className="md:px-14 px-7 md:py-20 py-10 m-3 md:m-0 bg-white rounded-3xl flex flex-col items-center justify-center lg:min-w-[500px]">
        <div className="text-2xl text-black font-semibold mb-3">
          Login to Account
        </div>
        <div className="text-md text-gray-500 font-semibold mb-7">
          Please enter your email and password to continue
        </div>
        <AdminAuthInputField
          type="text"
          label="Email Address:"
          placeholder="esteban_schiller@gmail.com"
          value={email}
          onChange={handleEmailChanges}
        />
        <AdminAuthInputField
          type="password"
          label="Password:"
          placeholder="● ● ● ● ● ● ● ●"
          value={password}
          onChange={handlePasswordChanges}
          forgetPassword={true}
        />
        <AdminAuthCheckBox
          checked={rememberMe}
          label="Remember Password"
          onChange={() => {
            handleRememberMeChanges();
          }}
        />
        <button
          onClick={() => {
            window.scroll(0, 0);
            navigate("/admin/dashboard");
          }}
          className="w-[90%] mt-10 bg-tertiary text-white font-semibold text-lg py-3 rounded-lg"
        >
          Sign In
        </button>
        <div
          onClick={() => {
            window.scroll(0, 0);
            navigate("/admin/register");
          }}
          className="flex gap-2 mt-3 text-sm sm:text-md font-semibold cursor-pointer"
        >
          <div className="text-gray-400">Don't Have an Account?</div>
          <div className="text-tertiary underline">Create Account</div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
