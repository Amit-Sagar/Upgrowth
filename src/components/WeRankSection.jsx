import React from "react";

const WeRankSection = () => {
  return (
    <div className="flex justify-start items-center w-full py-20">
      <div className=" pl-20">
        <img
          className="w-[450px]"
          src="https://www.singlegrain.com/wp-content/themes/singlegrain/assets/dist/images/redesign2023/home/keywords/grain-graphic.svg"
          alt=""
        />
      </div>
      <div className=" pl-20 px-60">
        <h1 className="text-6xl font-bold">
          We rank highly on Google for our target keywords.{" "}
          <span className="text-[rgb(242,112,56)]">
            Want us to do the same for you?
          </span>
        </h1>
        <p className="text-2xl pt-5 flex items-center gap-2 font-semibold">
          We’ll bring innovative strategies to help you scale faster.
          <span className="text-[rgb(242,112,56)] flex justify-center items-center gap-2 hover:underline cursor-pointer">
            Work With Us
            <img
              src="https://www.singlegrain.com/wp-content/themes/singlegrain/assets/dist/images/redesign2023/arrows/cta-small.svg"
              alt=""
            />
          </span>
        </p>
      </div>
    </div>
  );
};

export default WeRankSection;
