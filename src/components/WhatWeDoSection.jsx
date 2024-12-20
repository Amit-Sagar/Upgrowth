import React from "react";
import { whatWeDoData } from "./data";

const WhatWeDoSection = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 text-center py-5">
      <h1 className="text-8xl font-semibold">
        What We <span className="text-[rgb(242,119,65)]">Do</span>
      </h1>
      <p className="text-xl font-semibold">
        At Single Grain, we believe that when it’s personal and personalized, it
        gets results.
      </p>
      <p className="text-xl px-40">
        Our digital marketing specialists combine tried-and-true strategies with
        innovative marketing tech to scale your business and drive growth. With
        an exceptional team of hustlers equipped with the knowledge, tools, and
        talent to reconstruct your strategy, you’ll experience the
        transformative difference a full-spectrum digital agency can make for
        your business.
      </p>
      <div className="flex justify-center items-center gap-10">
        {whatWeDoData.map((item, index) => {
          return (
            <div className="flex flex-col justify-center items-center gap-5 w-[200px]">
              <img className="w-[150px]" src={item.img} key={index} alt="" />
              <p className="text-xl font-semibold">{item.des}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhatWeDoSection;
