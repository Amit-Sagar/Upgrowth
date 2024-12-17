import React from "react";
import { comImg } from "../components/data";
import Services from "../components/Services";
import HeroCard from "../components/HeroCard";
import TextList from "../components/TextList";

const HomePage = () => {
  return (
    <div className="pt-[120px] flex flex-col justify-center items-center gap-10">
      <HeroCard />

      <div className="bg-black w-[95%] py-10 rounded-lg">
        <p className="text-center text-xl text-white">
          Companies We've Helped Grow
        </p>
        <div className="flex justify-center items-center gap-24 pt-5">
          {comImg.map((item, index) => {
            return (
              <img src={item} className=" cursor-pointer" key={index} alt="" />
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
