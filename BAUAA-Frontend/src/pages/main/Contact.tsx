import {
  faEnvelope,
  faHeadset,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className="md:w-[40%] w-[90%]  flex-grow flex-col flex items-center justify-center mt-40 gap-3 my-10 mx-5 ">
      <div className="text-xl md:text-2xl  lg:text-3xl xl:text-4xl text-primary font-bold">
        Contact Us
      </div>
      <div className="text-sm lg:text-xl text-gray-500 italic">
        Contact us anytime! Our team is available 24/7 to assist you.
      </div>
      <div className="flex custom-xl:flex-row flex-col w-full">
        <div className="flex flex-1 flex-col gap-4 ">
          <input
            type="text" // Toggle between password and text input types
            name="email"
            id="email"
            className="max-w-xl custom-xl:max-w-lg input"
          />
          <input
            type="text" // Toggle between password and text input types
            name="email"
            id="email"
            className="max-w-xl custom-xl:max-w-lg input"
          />
          <textarea // Toggle between password and text input types
            name="email"
            id="email"
            className="max-w-xl custom-xl:max-w-lg h-[100px] input"
          />
          <button
            onClick={() => {}}
            className="w-full bg-primary text-white py-3 rounded-xl max-w-xl custom-xl:max-w-lg"
          >
            Send
          </button>
        </div>
        <div className="max-w-xl custom-xl:max-w-lg custom-xl:w-[1px] custom-xl:h-auto custom-xl:mx-5 h-[1px] w-auto custom-xl:my-0 my-5  bg-secondary border border-secondary"></div>
        <div className="flex custom-xl:w-[40%] w-100% flex-col justify-between">
          <div className="text-primary text-2xl font-semibold">Contact Us</div>

          <table className="w-full -ml-2">
            <tbody>
              <tr>
                <td className="text-center text-secondary">
                  <FontAwesomeIcon icon={faHeadset} />
                </td>
                <td className="text-xl text-gray-400">+961 76 722 925</td>
              </tr>
              <tr>
                <td className="text-center text-secondary">
                  <FontAwesomeIcon icon={faEnvelope} />
                </td>
                <td className="text-xl  text-gray-400">Info@BAU.com</td>
              </tr>
              <tr>
                <td className="text-center text-secondary">
                  <FontAwesomeIcon icon={faLocationDot} />
                </td>
                <td className="text-xl text-gray-400">Beirut, Lebanon</td>
              </tr>
            </tbody>
          </table>

          <div>
            <div className="text-primary mb-4 text-2xl font-semibold">
              Follow Us:
            </div>
            <div className="flex gap-4">
              <img
                src="tiktok.svg"
                alt="Tiktok"
                className="size-[25px] text-secondary "
              />
              <img
                src="facebook.svg"
                alt="Facebook"
                className="size-[25px] text-secondary "
              />
              <img
                src="instagram.svg"
                alt="Instagram"
                className="size-[25px] text-secondary "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
