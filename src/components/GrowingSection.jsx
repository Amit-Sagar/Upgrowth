import React from "react";

const GrowingSection = () => {
  return (
    <div className="w-full relative flex justify-center items-center mt-28 h-[400px]">
      <div className="w-[80%] py-12 rounded-lg absolute -bottom-20 bg-heroImg flex flex-col justify-center items-center">
        <img
          src="https://www.singlegrain.com/wp-content/themes/singlegrain/assets/dist/images/redesign2023/home/start-growing/graphic.png"
          className="h-[250px] w-[600px] pt-10"
          alt=""
        />
        <p className="text-3xl text-white font-semibold text-center">
          Level Up Your Marketing Without <br /> Increasing Your Headcount
        </p>
        <button className="text-white bg-[rgb(42,42,42)] px-14 py-3 mb-10 font-bold flex justify-center items-center gap-3 hover:opacity-90 duration-100 mt-10 border border-black">
          WORK WITH US
          <img
            src="https://www.singlegrain.com/wp-content/themes/singlegrain/assets/dist/images/redesign2023/arrows/cta-large.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default GrowingSection;
