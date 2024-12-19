import React from "react";
import { services } from "./data";

const Services = () => {
  return (
    <div className="bg-black w-[95%] flex justify-center items-center flex-wrap gap-10 py-20 rounded-lg">
      {services.map((item, index) => {
        return (
          <div key={index} className="bg-[rgb(41,41,41)] w-[350px] flex flex-col justify-center items-center gap-5 text-center text-white h-[650px] rounded-lg px-5 cursor-pointer ">
            <img src={item.img} alt="" />
            <p className="text-3xl font-extrabold">{item.head}</p>
            <p className="text-gray-400">{item.des}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
