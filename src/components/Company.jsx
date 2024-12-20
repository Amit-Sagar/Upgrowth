import React from "react";
import { comImg } from "./data";

const Company = () => {
  return (
    <div className="bg-[url('https://www.singlegrain.com/wp-content/themes/singlegrain/assets/dist/images/redesign2023/home/logos/bg.jpg')] bg-cover bg-center  w-[95%] rounded-lg pt-10 pb-20">
      <h1 className="text-6xl text-white font-bold text-center pb-20">
        Companies We've Helped Grow
      </h1>
      <div className=" flex flex-wrap justify-center items-center gap-20">
        {comImg.map((item, index) => {
          return (
            <img
              src={item}
              className=" cursor-pointer hover:scale-110 duration-200"
              key={index}
            />
          );
        })}
        {comImg.map((item, index) => {
          return (
            <img
              src={item}
              className=" cursor-pointer hover:scale-110 duration-200"
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Company;
