import React, { use, useState } from "react";
import { user } from "../components/data";

const HeroCard = () => {
  const [userIndex, setUserIndex] = useState(0);
  const PreUser = () => {
    const currentIndex = userIndex;
    if (currentIndex != 0) {
      setUserIndex((pre) => pre - 1);
    } else {
      setUserIndex(user.length - 1);
    }
  };
  const NextUser = () => {
    const currentIndex = userIndex;
    if (currentIndex != user.length - 1) {
      setUserIndex((pre) => pre + 1);
    } else {
      setUserIndex(0);
    }
  };
  return (
    <div className="w-[95%] flex justify-center items-center gap-28 h-[600px] bg-heroImg bg-cover bg-center rounded-lg">
      <div className="w-[40%] text-white">
        <h1 className="text-5xl font-bold leading-tight tracking-wide">
          <span className="bg-black px-1">Transforming Your Marketing</span>
          into Measurable Growth
        </h1>
        <p className="text-xl py-5 tracking-widest">
          At UpGrowth Marketing, we craft strategies that go beyond clicks and
          impressions. We partner with you to drive revenue-focused,
          outcome-driven growth that elevates your business. Discover a
          marketing approach designed to deliver results, enhance revenue, and
          scale your impact.
        </p>
        <button className="flex justify-center items-center gap-3 font-bold px-16 py-4 mt-5 transition duration-200 border border-black bg-[rgb(42,42,42)] hover:bg-[rgb(67,67,67)]">
          WORK WITH US
          <img
            src="https://www.singlegrain.com/wp-content/themes/singlegrain/assets/dist/images/redesign2023/arrows/cta-large.svg"
            alt=""
          />
        </button>
      </div>
      <div className="w-[40%] text-white text-center">
        <div className="flex justify-center items-center gap-36 text-3xl">
          <span onClick={PreUser} className=" cursor-pointer">
            <img
              className=" rotate-180 w-5"
              src="https://www.singlegrain.com/wp-content/themes/singlegrain/assets/dist/images/redesign2023/arrows/cta-large.svg"
              alt=""
            />
          </span>
          <img className=" rounded-[50%]" src={user[userIndex].img} alt="/" />
          <span onClick={NextUser} className=" cursor-pointer">
            <img
              className="w-5"
              src="https://www.singlegrain.com/wp-content/themes/singlegrain/assets/dist/images/redesign2023/arrows/cta-large.svg"
              alt=""
            />
          </span>
        </div>
        <div className="flex flex-col justify-center items-center pt-10">
          <p className="text-4xl font-bold">"{user[userIndex].head}"</p>
          <p className="font-bold text-lg pt-12">{user[userIndex].name}</p>
          <p>{user[userIndex].position}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
