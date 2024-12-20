import React from "react";

const OurMission = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mb-[3rem] md:items-start justify-between pt-6 md:p-12 bg-white">
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 mb-6 md:mb-0">
        <div className="absolute top-16 left-16 w-4/6 h-full bg-[rgb(248,171,139)] rounded-lg"></div>
        <img
          src="https://static.wixstatic.com/media/c837a6_fb7fd08db91d446d9b98e2beae765075~mv2.jpg/v1/crop/x_1384,y_0,w_3449,h_3800/fill/w_558,h_614,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/GettyImages-1138450996.jpg"
          alt="Team brainstorming"
          className="relative w-4/6 left-40 rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 px-28 pt-20">
        <h2 className="text-3xl text-gray-900 mb-6">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          UpGrowth is committed to amplify our client's business to new heights
          by harnessing the power of innovative digital marketing strategies to
          accelerate growth and achieve real business outcomes.
        </p>
        <p className="text-gray-700 leading-relaxed">
          With our collective experience of more than 25+ years in digital
          marketing across all the industries, we are dedicated to helping our
          clients propel their business growth.
        </p>
      </div>
    </div>
  );
};

export default OurMission;
