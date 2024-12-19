import React, { use, useState } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
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
    <div className='w-[95%] flex justify-center items-center gap-28 h-[600px] bg-[url("https://www.singlegrain.com/wp-content/themes/singlegrain/assets/dist/images/redesign2023/home/hero/bg.jpg")] bg-cover bg-center rounded-lg'>
      <div className="w-[40%] text-white">
        <h1 className="text-6xl font-bold leading-tight">
          <span className="bg-black">Transforming Your Marketing</span> into
          Measurable Growth
        </h1>
        <p className="text-xl py-5">
          At UpGrowth Marketing, we craft strategies that go beyond clicks and
          impressions. We partner with you to drive revenue-focused,
          outcome-driven growth that elevates your business. Discover a
          marketing approach designed to deliver results, enhance revenue, and
          scale your impact.
        </p>
        <button className="flex justify-center items-center gap-3 font-bold px-16 py-4 mt-5 transition duration-200 border border-black bg-[rgb(42,42,42)] hover:bg-[rgb(67,67,67)]">
          WORK WITH US <FaAnglesRight />{" "}
        </button>
      </div>
      <div className="w-[40%] text-white text-center">
        <div className="flex justify-center items-center gap-28 text-3xl">
          <span onClick={PreUser} className=" cursor-pointer">
            <FaAnglesLeft />
          </span>
          <img className=" rounded-[50%]" src={user[userIndex].img} />
          <span onClick={NextUser} className=" cursor-pointer">
            <FaAnglesRight />
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-4xl font-bold">"{user[userIndex].head}"</p>
          <p className="font-bold text-lg pt-12">{user[userIndex].name}</p>
          <p>{user[userIndex].position}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
