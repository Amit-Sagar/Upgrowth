import React, { useState } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
import { user } from "./data";

const UserSection = () => {
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
    <div className="w-full text-center py-20">
      <div className="bg-[url('https://www.singlegrain.com/wp-content/themes/singlegrain/assets/dist/images/redesign2023/home/testimonials/bg.png')] flex justify-center items-center gap-28 text-3xl pb-10">
        <span onClick={PreUser} className=" cursor-pointer">
          <img
            className="bg-gray-500 p-5 rounded-full rotate-180 hover:bg-gray-700 duration-200"
            src="https://www.singlegrain.com/wp-content/themes/singlegrain/assets/dist/images/redesign2023/arrows/cta-large.svg"
            alt=""
          />
        </span>
        <img className=" rounded-[50%]" src={user[userIndex].img} />
        <span onClick={NextUser} className=" cursor-pointer">
          <img
            className="bg-gray-500 p-5 rounded-full hover:bg-gray-700 duration-200"
            src="https://www.singlegrain.com/wp-content/themes/singlegrain/assets/dist/images/redesign2023/arrows/cta-large.svg"
            alt=""
          />
        </span>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 px-[25%]">
        <p className="text-4xl font-bold">"{user[userIndex].head}"</p>
        <p className="text-2xl">{user[userIndex].text}</p>
        <div>
          <p className="font-bold text-lg pt-12">{user[userIndex].name}</p>
          <p>{user[userIndex].position}</p>
        </div>
      </div>
    </div>
  );
};

export default UserSection;
