import React from "react";
import Services from "../components/Services";
import HeroCard from "../components/HeroCard";
import TextList from "../components/TextList";
import LearnMoreSection from "../components/LearnMoreSection";
import CompanyImg from "../components/CompanyImg";
import Company from "../components/Company";
import WeRankSection from "../components/WeRankSection";
import UserSection from "../components/UserSection";
import GrowingSection from "../components/common/GrowingSection";

const HomePage = () => {
  return (
    <div className="pt-[120px] flex flex-col justify-center items-center">
      <HeroCard />
      <CompanyImg />
      <LearnMoreSection />
      <Services />
      <WeRankSection />
      <TextList />
      <UserSection />
      <Company />
      <div className="w-full relative flex justify-center items-center mt-28 h-[400px]">
        <GrowingSection
          btnText="WORK WITH US"
          classes="absolute -bottom-20 w-[80%]"
        />
      </div>
    </div>
  );
};

export default HomePage;
