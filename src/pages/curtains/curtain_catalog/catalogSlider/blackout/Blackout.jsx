import React from "react";
import "./blackout.scss";
import BlackoutTop from "./blackoutTop/BlackoutTop";
import BlackoutMid from "./blackoutMid/BlackoutMid";
import BlackoutBottom from "./blackoutBottom/BlackoutBottom";

const Blackout = () => {
  return (
    <div className="blackout">
      <div className="container">
        
        <div className="blackout__header-bgr">
          <h1 className="blackout-title"> Qarartma(Blackout)</h1>
        </div>

        <div className="blackout__content">
          <BlackoutTop />
          <div className="blackout__content-line1"></div>
          <BlackoutMid />
          <BlackoutBottom />
        </div>

      </div>
    </div>
  );
};

export default Blackout;
