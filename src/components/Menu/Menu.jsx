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
        <Link to="/">
          <img src={House} alt="" />
          <p>Home</p>
        </Link>
      </div>
      <div className="menu__wrapper">
        <Link to="/myhome">
          <img src={Panel} alt="" />
          <p>Panels</p>
        </Link>
      </div>
      <div className="menu__wrapper selected">
        <Link to="/myhome">
          <img src={Energy} alt="" />
          <p>Energy</p>
        </Link>
      </div>
    </div>
  );
}
