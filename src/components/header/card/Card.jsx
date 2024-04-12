import React from "react";
import "./card.scss";
import FrontContent from "./frontContent/FrontContent";
import BackContent from "./backContent/BackContent";

function Card() {
  return (
    <div className="card">
      <div className="card__container">
        <div className="card__container-face  card__container-front">
          <FrontContent />
        </div>
        <div className="card__container-face  card__container-back">
          <BackContent />
        </div>
      </div>
    </div>
  );
}

export default Card;
