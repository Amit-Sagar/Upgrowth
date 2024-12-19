import React from "react";
import { testimonials } from "./data";



const Testimonials = () => {
  return (
    <div className="py-12 bg-gray-50 flex justify-center items-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-start w-[30%]"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-32 rounded-full mb-4"
              />
              <h3 className="text-sm text-gray-800 font-semibold mb-2">
                "{testimonial.quote}"
              </h3>
              <p className="text-gray-600 mb-4 text-sm">{testimonial.text}</p>
              <div className="w-full text-start">
                <p className="text-gray-500 font-medium">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Testimonials;
