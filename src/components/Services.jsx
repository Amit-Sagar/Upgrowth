import React from "react";
import { services } from "./data";

const Services = () => {
  const text =
    "At Single Grain, our team of highly specialized marketing experts — ecommerce, pay-per-click, search engine optimization, lead generation, conversion rate optimization, performance marketing, and more — are here to ensure that you get the results you want. We focus on data that truly matters to inform our every conversation and decision with constant testing, tweaking, and optimizing. We make sure every opportunity is realized.";
  return (
    <div className="bg-[url('https://www.singlegrain.com/wp-content/themes/singlegrain/assets/dist/images/redesign2023/home/services/bg.jpg')] w-[95%] py-10 text-white text-center font-semibold flex flex-col justify-center items-center gap-10 ">
      <p className="text-6xl">Our Services</p>
      <p className="px-[12%] text-gray-400 text-xl">{text}</p>
      <div className="flex justify-center items-center flex-wrap gap-5 rounded-lg">
        {services.map((item, index) => {
          return (
            <div
              key={index}
              className="relative bg-[rgb(41,41,41)] w-[300px] flex flex-col justify-start items-center gap-5 text-center text-white h-[580px] rounded-lg px-5 pt-10 cursor-pointer "
            >
              <img className="w-[130px]" src={item.img} alt="" />
              <p className="text-3xl font-bold">{item.head}</p>
              <p className="text-gray-400">{item.des}</p>
              <span className="absolute bottom-[30px] flex justify-center items-center gap-2">
                <p className="text-[rgb(221,104,54)]">LEARN MORE</p>
                <img
                  src="https://www.singlegrain.com/wp-content/themes/singlegrain/assets/dist/images/redesign2023/arrows/cta-small.svg"
                  alt=""
                />
              </span>
            </div>
          );
        })}
      </div>
      <button className="text-white bg-[rgb(221,104,54)] px-14 py-3 font-bold flex justify-center items-center gap-3 hover:opacity-80 duration-100 mt-10">
        WORK WITH US
        <img
          src="https://www.singlegrain.com/wp-content/themes/singlegrain/assets/dist/images/redesign2023/arrows/cta-large.svg"
          alt=""
        />
      </button>
    </div>
  );
};

export default Services;

