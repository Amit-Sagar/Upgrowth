import React from "react";
import { leanMoreData } from "./data";
import { FaAnglesRight } from "react-icons/fa6";

const LearnMoreSection = () => {
  return (
    <div className="">
      <p className="text-6xl font-bold pl-12 py-20">
        Learn More About the <br />
        Work We’ve Done
      </p>
      <div className="flex justify-center items-center gap-5 flex-wrap px-[2%] pb-20">
        {leanMoreData.map((item, index) => {
          return index !== leanMoreData.length - 1 ? (
            <div
              key={index}
              className="w-[320px] h-[300px] relative bg-cover bg-center bg-no-repeat p-6 rounded-lg flex flex-col justify-center items-center gap-5 cursor-pointer hover:opacity-60 duration-300"
              style={{
                backgroundImage: `url(${item.bgImg})`,
              }}
            >
              <img className="w-28" src={item.img} alt="" />
              <img
                className="w-3"
                src="https://www.singlegrain.com/wp-content/themes/singlegrain/assets/dist/images/redesign2023/arrows/down.svg"
                alt=""
              />
              <p className="text-white font-semibold">{item.text}</p>
            </div>
          ) : (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.bgImg})`,
              }}
              className="w-[300px] h-[300px] relative bg-cover bg-center bg-no-repeat p-6 rounded-lg flex flex-col justify-center items-center bg-[rgb(242,112,56)] text-white text-center"
            >
              <h2 className="text-2xl font-semibold">
                Do you want to achieve the same numbers?
              </h2>
              <p className="pt-2">It’s easy!</p>
              <button className="flex justify-center items-center gap-3 font-bold px-6 py-2 mt-5 transition duration-200 border border-black bg-[rgb(42,42,42)] hover:bg-[rgb(102,102,102)]">
                WORK WITH US <FaAnglesRight />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LearnMoreSection;
