import Header from "../../components/main/Header";
import WhyBau from "../../components/main/WhyBau";
import WhoWeAre from "../../components/main/WhoWeAre";
import Alumni from "../../components/main/Alumni";
import WhatYouGet from "../../components/main/WhatYouGet";
import { serviceData } from "../../data/index";

const AboutUs = () => {
  return (
    <div>
      <Header
        img="about-banner.png"
        title="Lorem Ipsum Dolor Sit Amet"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
      />
      <div className="mx-5 xl:mx-80 my-10 flex flex-col gap-5">
        <WhyBau
          title="Why BAUAA"
          text="At BAUAA, we are passionate about revolutionizing the way you stay connected while traveling. Founded with a vision to eliminate the hassles of traditional SIM cards and exorbitant roaming charges, Flyesim offers a seamless, innovative, and cost-effective solution for globetrotters."
        />
        <WhoWeAre
          img="who-we-are.png"
          title="Who We Are"
          text="Flyesim is a cutting-edge technology company dedicated to enhancing your travel experience through our state-of-the-art eSIM application. Our team consists of tech enthusiasts, travel aficionados, and customer service experts, all committed to providing you with the best connectivity solutions no matter where your adventures take you."
        />
        <WhatYouGet
          title="What You Get"
          text="Partnering with BAUAA comes with a multitude of benefits designed to
        enhance your business and provide exceptional value to your customers."
          services={serviceData}
        />
        <Alumni
          title="Explore Alumni Benifits"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat."
          img="about-alumni.png"
          buttonText="Start Now"
          buttonLink="/"
        />
      </div>
    </div>
  );
};

export default AboutUs;
