import React from "react";
import "./footer_bottom.scss";
import NavBar from "../../nav_bar/NavBar";
import FooterMenu from "./footer_menu/FooterMenu";
import FooterContactDetails from "./footer_contact_details/FooterContactDetails";
import ScrollToTop from "../../button/scrollToTop/ScrollToTop";


function FooterBottom() {
  return (
    <div className="footer-bottom">
      
      <div className="footer-columns">
        <NavBar />
        <FooterMenu />
        <FooterContactDetails />
      </div>

      <div className="line"></div>

      <div className="footer-copyright">
        <p className="copyright">Tengiz © 2023 All rights reserved</p>
        <ScrollToTop />
      </div>

    </div>
  );
}

export default FooterBottom;
