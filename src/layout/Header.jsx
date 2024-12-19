import React from "react";
import { useNavigate } from "react-router-dom";

const options = [
  { id: 1, label: "SERVICES", route: "/services" },
  { id: 2, label: "INDUSTRIES", route: "/industries" },
  { id: 3, label: "ABOUT", route: "/about" },
  { id: 4, label: "CONTACT US", route: "/contact-us" },
];

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center px-[3rem] fixed w-full top-0 py-5 bg-white/70 z-10 backdrop-blur-md ">
      <div
        className="text-2xl font-extrabold cursor-pointer"
        onClick={() => navigate("/")}
      >
        <p>UpGrowth</p>
      </div>
      <div className="flex gap-10 text-xs font-bold items-center">
        {options.map((item) => (
          <p className="cursor-pointer" onClick={() => navigate(item.route)}>
            {item.label}
          </p>
        ))}
        <button className="px-6 py-2 text-xs tracking-wider	 border-2 font-bold border-[#f37741] text-[#f37741] hover:bg-[#f37741] hover:text-white  transition duration-400 ">
          WORK WITH US
        </button>
      </div>
    </div>
  );
};

export default Header;
