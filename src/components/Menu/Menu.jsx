import React from "react";
import { Link } from "react-router-dom";
import House from "../../assets/menu-house.svg";
import Panel from "../../assets/menu-panels.svg";
import Energy from "../../assets/menu-energy.svg";
import "./Menu.scss";

export default function Menu() {
  return (
    <div className="menu sticky">
      <div className="menu__wrapper">
        <Link to="/" className="menu__link">
          <img src={House} alt="" />
          <p className="menu__title">Home</p>
        </Link>
      </div>
      <div className="menu__wrapper">
        <Link to="/myhome" className="menu__link">
          <img src={Panel} alt="" />
          <p className="menu__title">Panels</p>
        </Link>
      </div>
      <div className="menu__wrapper selected">
        <Link to="/myhome" className="menu__link">
          <img src={Energy} alt="" />
          <p className="menu__title">Energy</p>
        </Link>
      </div>
    </div>
  );
}
