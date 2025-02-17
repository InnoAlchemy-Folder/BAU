import { useState } from "react";
import AdminAuthCheckBox from "../../components/admin/AdminAuthCheckBox";
import AdminAuthInputField from "../../components/admin/AdminAuthInputField";
import { useNavigate } from "react-router-dom";

const AdminRegister = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);

  const handleEmailChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleUsernameChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChanges = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  const handleTermsMeChanges = () => {
    setTerms(!terms);
  };

  return (
    <div className="w-screen h-screen bg-secondary bg-admin-auth bg-no-repeat bg-cover flex justify-center items-center">
      <div className="md:px-14 px-7 md:py-20 py-10 m-3 md:m-0 bg-white rounded-3xl flex flex-col items-center justify-center lg:min-w-[500px]">
        <div className="text-2xl text-black font-semibold mb-3">
          Create an Account
        </div>
        <div className="text-md text-gray-500 font-semibold mb-7">
          Create a account to continue
        </div>
        <AdminAuthInputField
          type="text"
          label="Email Address:"
          placeholder="esteban_schiller@gmail.com"
          value={email}
          onChange={handleEmailChanges}
        />
        <AdminAuthInputField
          type="text"
          label="Username:"
          placeholder="John Doe"
          value={username}
          onChange={handleUsernameChanges}
        />
        <AdminAuthInputField
          type="password"
          label="Password:"
          placeholder="● ● ● ● ● ● ● ●"
          value={password}
          onChange={handlePasswordChanges}
        />
        <AdminAuthCheckBox
          checked={terms}
          label="I accept terms and conditions"
          onChange={() => {
            handleTermsMeChanges();
          }}
        />
        <button className="w-[90%] mt-10 bg-tertiary text-white font-semibold text-lg py-3 rounded-lg">
          Sign Up
        </button>
        <div
          onClick={() => {
            window.scroll(0, 0);
            navigate("/admin/login");
          }}
          className="flex gap-2 mt-3 text-sm sm:text-md font-semibold cursor-pointer"
        >
          <div className="text-gray-400">Already have an account?</div>
          <div className="text-tertiary underline">Login</div>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;
