import React from "react";
import LearnMoreSection from "../components/LearnMoreSection";
import FrequentlyAskedSection from "../components/Industry/FrequentlyAskedSection";
import Hero from "../components/Industry/Hero";
import TextList from "../components/TextList";
import GrowingSection from "../components/common/GrowingSection";
import Testimonials from "../components/Testimonials";

const Industry = () => {
  return (
    <div className="pt-[120px]">
      <Hero />
      <LearnMoreSection />
      <FrequentlyAskedSection />
      <TextList />
      <div className="my-24 ">
        <h1 className="text-5xl font-bold px-5">— Our clients love us</h1>
        <Testimonials />
      </div>
      <div className="mb-20">
        <GrowingSection btnText="GROW YOUR SASS MRR" classes="w-[90%]" />
      </div>
    </div>
  );
};

export default Industry;
