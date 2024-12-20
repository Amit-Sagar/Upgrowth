import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="">
      {items.map((item, index) => (
        <div
          key={index}
          className="border-4 border-[#f3f3f3] bg-[#f8f8f8] my-3 rounded-lg p-3"
        >
          <button
            onClick={() => handleToggle(index)}
            className="w-full text-left px-4 py-2  hover:text-[#f27038] text-2xl flex justify-between items-center font-semibold"
          >
            <span>{item.title}</span>
            <span>{activeIndex === index ? "-" : "+"}</span>
          </button>
          {activeIndex === index && (
            <div
              className="px-4 py-2 bg-gray-50 text-lg tracking-wide "
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
