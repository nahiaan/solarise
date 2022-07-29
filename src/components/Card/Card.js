import "./Card.scss";
import React, { useEffect, useState } from "react";

function Card() {
  const [co2, setCo2] = useState("6345 lbs");
  const [solarUsed, setSolarUsed] = useState("7000kw");
  const [solarSold, setSolarSold] = useState("1500kw");

  const handleClickLastWeek = () => {
    setCo2("389797 lbs");
    setSolarUsed("2873482kw");
    setSolarSold("8347387kw");
  };

  const handleClickLastMonth = () => {
    setCo2("38979 lbs7");
    setSolarUsed("2873482kw");
    setSolarSold("8347387kw");
  };

  const handleClickLastYear = () => {
    setCo2("389797 lbs");
    setSolarUsed("2873482kw");
    setSolarSold("8347387kw");
  };

  return (
    <div className="card">
      <button onClick={handleClickLastMonth} className="card-btn">
        Last month
      </button>

      <div className="card-container">
        <div className="card-item">
          <h2>CO2 Emissions saved</h2>
          <h1>{co2}</h1>
        </div>
        <div className="card-item2">
          <h2 className="card-subtitle">CO2 Emissions saved</h2>
          <h1>{solarUsed}</h1>
        </div>
        <div className="card-item3">
          <h2>CO2 Emissions saved</h2>
          <h1>{solarSold}</h1>
        </div>
      </div>
    </div>
  );
}

export default Card;
