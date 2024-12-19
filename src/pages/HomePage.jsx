import React from "react";
import { comImg } from "../components/data";
import Services from "../components/Services";
import HeroCard from "../components/HeroCard";
import TextList from "../components/TextList";
import LearnMoreSection from "../components/LearnMoreSection";
import CompanyImg from "../components/CompanyImg";
import Company from "../components/Company";
import WeRankSection from "../components/WeRankSection";
import UserSection from "../components/UserSection";
import GrowingSection from "../components/GrowingSection";

const HomePage = () => {
  return (
    <div className="pt-[120px] flex flex-col justify-center items-center">
      <HeroCard />
      <CompanyImg/>
      <LearnMoreSection/>
      <Services />
      <WeRankSection/>
      <TextList />
      <UserSection/>
      <Company/>
      <GrowingSection/>
    </div>
  );
};

export default HomePage;
