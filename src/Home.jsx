import React from "react";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import WorkExperience from "./Workexperience,";
import StatusCounter from "./Statuscounter";
import PortfolioSection from "./Projectssection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <WorkExperience/>
      <StatusCounter/>
      <PortfolioSection/>
    </div>
  );
};

export default Home;
