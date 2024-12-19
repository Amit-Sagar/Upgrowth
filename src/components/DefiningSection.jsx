import React from "react";
import { definingItems } from "../components/data";

const DefiningSection = () => {
  return (
    <div className='bg-[url("https://www.singlegrain.com/wp-content/themes/singlegrain/assets/dist/images/about-us/defining-bg.png")] bg-cover bg-center rounded-lg'>
      <h1 className="text-[rgb(255,228,0)] text-6xl font-semibold py-16 px-10 md:px-[20%] text-center">
        Defining
        <span className="text-white"> who we are, what we do, and why </span>
        we do it.
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 pb-20">
        {definingItems.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-white w-[90%] md:w-[30%] rounded-xl flex flex-col justify-center items-center gap-5 px-10 py-14 text-center"
            >
              <img src={item.img} className="w-[200px]" alt="" />
              <p className="text-3xl font-semibold">{item.head}</p>
              <p className="text-xl text-gray-700">{item.des}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DefiningSection;
