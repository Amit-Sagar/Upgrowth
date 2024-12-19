import React from "react";
import { comImg } from "../components/data";
import Services from "../components/Services";
import HeroCard from "../components/HeroCard";
import TextList from "../components/TextList";

const HomePage = () => {
  return (
    <div className="pt-[120px] flex flex-col justify-center items-center gap-10">
      <HeroCard />

      <div className="bg-black/90 w-[95%] rounded-lg py-4">
        <div className="flex justify-center items-center gap-24">
          {comImg.map((item, index) => {
            return (
              <img
                src={item}
                className=" cursor-pointer hover:scale-110"
                key={index}
                alt=""
              />
            );
          })}
        </div>
      </div>
      
      <Services />
      <TextList />
    </div>
  );
};

export default HomePage;
