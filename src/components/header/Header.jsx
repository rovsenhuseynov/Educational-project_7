import React, { useState } from "react";
import "./header.scss";
import Hamburger from "hamburger-react";

import NavBar from "../nav_bar/NavBar";
import Logo from "../Logo/Logo";
import Card from "./card/Card";
import VisitID from "../visitID/VisitID";

function Header() {
  const [isOpen, setOpen] = useState(true);

  const toggleNav = () => {
    setOpen(!isOpen);
  };

  const hamburgerColor = isOpen ? "rgba(198, 159, 106, .5)" : "white";

  return (
    <header className="header">
      <div className="header-top">
        <Logo />
        <Hamburger
          size={24}
          toggled={isOpen}
          toggle={toggleNav}
          color={hamburgerColor}
        />
      </div>

      <div className={`header-bottom ${isOpen ? "active" : "nav-hidden"}`}>
        <div className="header-bottom__contacts">
          <div className="container">
            <NavBar />
          </div>
        </div>
      </div>
      <VisitID />
      <Card />
    </header>
  );
}

export default Header;
