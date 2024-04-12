import React from "react";
import "./main.scss";
import HeroSection from "./heroSection/HeroSection";
import AboutUsSection from "./aboutSection/AboutUsSection";
import FaqSection from "./faqSection/FaqSection";
import Advantages from "./advantages/Advantages";
import VideoSection from "./videoSection/VideoSection";

function Main() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <VideoSection/>
      <Advantages/>
      <FaqSection />
    </>
  );
}

export default Main;
