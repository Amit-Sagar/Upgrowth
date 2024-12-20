import React from "react";

const interestedServices = [
  "Sales Funnel Agency",
  "Instagram Management Services",
  "Content Audit Service",
  "Video Content Creation Services",
  "Branding Agency",
  "Influencer Marketing Agency",
  "Customer Acquisition Agency",
  "B2B Podcast Agency",
  "YouTube SEO Services",
];

const InterestedSection = () => {
  return (
    <div className="py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-8">
        You also might be interested in
      </h2>
      <div className="grid grid-cols-3 gap-6 mx-auto pt-8">
        {interestedServices.map((service, index) => (
          <div key={index} className="flex items-center justify-start pl-[10%] gap-2 text-gray-500">
            <span className="text-[#f37741] text-xl">✔</span>
            <p className="text-base font-medium">{service}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterestedSection;
