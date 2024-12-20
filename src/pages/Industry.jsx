import React from "react";
import LearnMoreSection from "../components/LearnMoreSection";
import FrequentlyAskedSection from "../components/Industry/FrequentlyAskedSection";
import Hero from "../components/Industry/Hero";

const Industry = () => {
  return (
    <div className="pt-[120px]">
      <Hero />
      <LearnMoreSection />
      <FrequentlyAskedSection />
    </div>
  );
};

export default Industry;
