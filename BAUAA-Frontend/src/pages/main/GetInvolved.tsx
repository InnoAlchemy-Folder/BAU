import Header from "../../components/main/Header";
import Partners from "../../components/main/Partners";
import GetInvolvedWhoWeAre from "../../components/main/GetInvolvedWhoWeAre";
import WhatWeDo from "../../components/main/WhatWeDo";
import JoinUs from "../../components/main/JoinUs";
import Alumni from "../../components/main/Alumni";

const GetInvolved = () => {
  return (
    <div>
      <Header
        img="get-involved-banner.png"
        title="Lorem Ipsum Dolor Sit Amet"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
      />
      <div className="mx-5 xl:mx-80 my-10 flex flex-col gap-5">
        <Partners
          partners={[
            "partner.png",
            "partner.png",
            "partner.png",
            "partner.png",
            "partner.png",
            "partner.png",
          ]}
        />
        <GetInvolvedWhoWeAre
          title="Who We Are"
          text="BAUAA is a cutting-edge technology company dedicated to enhancing your travel experience through our state-of-the-art eSIM application. Our team consists of tech enthusiasts, travel aficionados, and customer service experts, all committed to providing you with the best connectivity solutions no matter where your adventures take you."
          img="get-involved-who-we-are.png"
        />
        <WhatWeDo
          title="What we Do"
          text="At BAUAA, we are passionate about revolutionizing the way you stay connected while traveling. Founded with a vision to eliminate the hassles of traditional SIM cards and exorbitant roaming charges, Flyesim offers a seamless, innovative, and cost-effective solution for globetrotters."
          img="what-we-do.png"
        />
        <JoinUs />
        <Alumni
          title="Donate for BAUAA"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat."
          img="get-involved-alumni.png"
          buttonText="Donate Now"
          buttonLink="/donation"
        />
      </div>
    </div>
  );
};

export default GetInvolved;
