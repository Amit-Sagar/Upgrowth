import React from "react";
import { footerData } from "../components/data";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 w-[95%] rounded-lg mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {footerData.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-white mb-4">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a className="hover:text-pink-300 cursor-pointer">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center text-sm text-gray-500">
        © 2024 Up Growth. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
