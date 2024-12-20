import React from "react";
import { companyImg } from "./data";

const CompanyImg = () => {
  return (
    <div className="flex justify-center items-center gap-24 cursor-pointer py-5">
      {companyImg.map((item, index) => {
        return (
          <img
            className="w-[100px] grayscale hover:grayscale-0 transition duration-100"
            src={item}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default CompanyImg;
