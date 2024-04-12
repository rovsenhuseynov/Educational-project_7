import React from "react";
import logoImg from "../../assets/Images/svg/curtain_logo/curtain-logo.svg";

function Logo() {
  return (
    <div className="logo">
      <div className="image">
        <img src={logoImg} alt="logo_image" className="logo-img" />
      </div>

      <div className="logo-text">
        <h3 className="text-h3">
          Perde<span className="text3span">cilik</span>
        </h3>
        <h2 className="text-ve"> & </h2>
        <h3 className="text-h3">
          Ev<span className="text3span">tekstil</span>
        </h3>
      </div>
    </div>
  );
}

export default Logo;
