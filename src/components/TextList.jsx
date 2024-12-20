import React, { useState } from "react";
import { FaRegHandPointRight } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
import { textData } from "./data";

const TextList = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex justify-center items-center space-y-4 px-20 bg-[url('https://www.singlegrain.com/wp-content/themes/singlegrain/assets/dist/images/redesign2023/home/hero/bg.jpg')] w-[95%] py-10 rounded-xl">
      <div className="flex flex-col items-start space-y-2 w-[60%] text-3xl">
        <p className="text-white text-6xl font-bold mb-10">
          Our Growth Methodology
        </p>
        {textData.map((item, index) => (
          <div
            key={index}
            className={`flex items-center cursor-pointer space-x-2 ${activeIndex === index ? "text-white font-bold" : "text-gray-300"}`}
            onClick={() => setActiveIndex(index)}
          >
            {activeIndex === index && (
              <span className="text-white">
                <FaRegHandPointRight />
              </span>
            )}
            <span>{item.text}</span>
          </div>
        ))}
      </div>
      <div className="text-white w-[40%] text-xl">
        <p>{textData[activeIndex].details}</p>
        <button className="flex justify-center items-center gap-3 font-bold px-10 py-3 mt-5 transition duration-200 border border-black bg-[rgb(42,42,42)] hover:bg-[rgb(67,67,67)]">
          WORK WITH US 
          <img src="https://www.singlegrain.com/wp-content/themes/singlegrain/assets/dist/images/redesign2023/arrows/cta-large.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default TextList;
