import React from "react";
import "./curtains_parallax.scss";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import image_1 from "../../../assets/Images/webp/curtain_155.webp";

function CurtainsParallax() {
  const background = {
    image: image_1,
    translateY: [0, 50],
    opacity: [0.2, 0.5],
    scale: [1, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline = {
    translateY: [0, 0.1],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="container">
        <div className="top-layer">
          <p className="top-layer__par">
            Düzgün tekstil dizaynı istənilən otağı mükəmməl etməyə kömək
            edəcəkdir
          </p>
          <h1 className="top-layer__text-h1">Biz Sizə nə təklif edirik</h1>
          <p className="top-layer__par">
            Pəncərələrin interyerə uyğun olması üçün düzgün rəng, parça növünü
            və dizayn tərzini seçməkdə sizə kömək edəcəyik.
          </p>
        </div>
      </div>
    ),
  };

  return (
    <div className="container-body">
      <ParallaxProvider>
        <ParallaxBanner
          layers={[background, headline]}
          className="bg-container"
        />
      </ParallaxProvider>
    </div>
  );
}

export default CurtainsParallax;
