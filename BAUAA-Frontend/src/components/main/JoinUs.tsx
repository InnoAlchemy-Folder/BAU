import Button from "./Button";

const JoinUs = () => {
  return (
    <div className="h-[60vh] md:h-[60vh] lg:h-[40vh] bg-[#d3d8ff] w-full flex justify-center items-center text-center text-white lg:px-32 px-6  py-10 rounded-3xl gap-5 overflow-hidden">
      <div className="flex flex-col items-center lg:items-start gap-7">
        <div className="text-primary text-4xl font-bold">Join Us Today</div>
        <div className="text-primary text-lg lg:text-start text-justify font-normal">
          If you’re interested in exploring partnership opportunities with
          BAUAA, we’d love to hear from you. Fill out the form below, and our
          partnership team will get in touch with you to discuss how we can work
          together to achieve mutual success.
        </div>
        <Button text="Get Involved" onClick={() => {}} />
      </div>
      <img src="join-us.png" className="hidden custom-xl:flex" />
    </div>
  );
};

export default JoinUs;
