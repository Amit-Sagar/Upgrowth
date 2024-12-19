import React from "react";
import OurMission from "../components/OurMission";
import DefiningSection from "../components/DefiningSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import Testimonials from "../components/Testimonials";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-[120px]">
      <h1 className="text-7xl py-3 pb-10">We help your ads get clics</h1>
      <OurMission/>
      <DefiningSection/>
      <WhatWeDoSection/>
      <Testimonials/>
    </div>
  );
};

export default About;
