import Header from "../../components/main/Header";
import EventListing from "../../components/main/EventListing";
import { eventCategories as initialCategories, events } from "../../data";
import { useState } from "react";
import Alumni from "../../components/main/Alumni";

const Events = () => {
  const [categories, setCategories] = useState(initialCategories);

  // Handler to toggle the selected category
  const handleCategoryClick = (index: number) => {
    setCategories((prevCategories) =>
      prevCategories.map((category, i) =>
        i === index ? { ...category, selected: !category.selected } : category
      )
    );
  };
  return (
    <div>
      <Header
        title="Lorem Ipsum Dolor Sit Amet"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
        img="home-banner.png"
      />
      <div className="mx-5 xl:mx-80 my-10 flex flex-col gap-10">
        <EventListing
          title="Events Section"
          categories={categories}
          events={events}
          onCategoryClick={handleCategoryClick}
        />
        <Alumni
          img="home-alumni.png"
          title="Register an Event"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat."
          buttonText="Register Now"
          buttonLink="/contact"
        />
      </div>
    </div>
  );
};

export default Events;
