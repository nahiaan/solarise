import "./Card.scss";
import React, { useEffect, useState } from "react";
import CircleSmall from "../Circle/CircleSmall";

function Card() {
  const [co2, setCo2] = useState("6345 lbs");
  const [solarUsed, setSolarUsed] = useState("7000kw");
  const [solarSold, setSolarSold] = useState("1500kw");

  const handleClickLastWeek = () => {
    setCo2("6345 lbs");
    setSolarUsed("7000kw");
    setSolarSold("1500kw");
  };

  const handleClickLastMonth = () => {
    setCo2("10568 lbs");
    setSolarUsed("9000kw");
    setSolarSold("3000kw");
  };

  const handleClickLastYear = () => {
    setCo2("50875 lbs");
    setSolarUsed("108382kw");
    setSolarSold("4038kw");
  };

  return (
    <div className="card">
      <div className="card-btn__wrapper">
        <button onClick={handleClickLastWeek} className="card-btn">
          Last Week
        </button>
        <button onClick={handleClickLastMonth} className="card-btn">
          Last month
        </button>
        <button onClick={handleClickLastYear} className="card-btn blue">
          Last Year
        </button>
      </div>
      <div className="card-container">
        <div className="card-item">
          <h2 className="card-subtitle">CO2 Emissions saved</h2>
          <h1 className="card-num__title">{co2}</h1>
        </div>
        <div className="card-item2">
          <h2 className="card-subtitle">Solar Energy Used</h2>
          <h1 className="card-num__title">{solarUsed}</h1>
        </div>
        <div className="card-item3">
          <h2 h2 className="card-subtitle">
            Solar Energy Sold
          </h2>
          <h1 className="card-num__title">{solarSold}</h1>
        </div>
      </div>
    </div>
  );
}

export default Card;
