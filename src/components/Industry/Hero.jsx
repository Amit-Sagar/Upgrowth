import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1000px] mx-auto flex flex-col justify-center items-center gap-10">
      <h1 className="text-5xl text-center font-bold ">
        SaaS Marketing Agency Focused on Driving MRR and User Acquisition
      </h1>
      <p className="text-center">
        Single Grain excels at delivering customized, business-changing SaaS
        marketing strategies that enhance online presence, drive customer growth
        and ensure long-term success for your brand.
      </p>
      <button className="bg-[#f27038] text-lg font-semibold text-white py-2 px-8 cursor-pointer rounded-full ">
        Grow your SaaS MRR
      </button>
    </div>
  );
};

export default Hero;
