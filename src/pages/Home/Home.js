import "./Home.scss";
import Circle from "../../components/Circle/Circle";
import Image1 from "../../assets/circle1.svg";
import Image3 from "../../assets/circle3.svg";
import Image4 from "../../assets/circle4.svg";
import ImageHome from "../../assets/Home-lightening.svg";
import LeftLine from "../../assets/LeftLine.svg";
import RightLine from "../../assets/RightLine.svg";
import MiddleLine from "../../assets/MiddleLine.svg";

import { useState, useEffect } from "react";

export default function Home() {
  const [panel, setPanel] = useState(12.7);
  const [home, setHome] = useState(7.2);
  const [powerWall, setPowerWall] = useState(2.4);
  const [grid, setGrid] = useState(3.1);

  useEffect(() => {
    setInterval(() => {
      const newEnergy = Math.random();
      setPanel((state) => parseFloat((state + newEnergy).toFixed(1)));
      setHome((state) => parseFloat((state + 0.6 * newEnergy).toFixed(1)));
      setPowerWall((state) =>
        parseFloat((state + 0.15 * newEnergy).toFixed(1))
      );
      setGrid((state) => parseFloat((state + 0.25 * newEnergy).toFixed(1)));
    }, 1000);
  }, []);

  return (
    <div className="home">
      <h1 className="home__title">Tammy's Dashboard</h1>
      <div className="home__circles">
        <Circle
          linkTo={"/solarpanel"}
          header="Solar Panel"
          image={Image1}
          text={`${panel} k.W.`}
          addClass={"circle--1"}
        />
        <img src={LeftLine} alt="" className="left__line" />
        <img src={RightLine} alt="" className="right__line" />
        <img src={MiddleLine} alt="" className="middle__line" />
        <div className="home__circles-subgroup">
          <Circle
            linkTo={"/myhome"}
            header="My Home"
            image={ImageHome}
            text={`${home} k.W.`}
            addClass={"circle--2"}
            headerBelow={true}
          />
          <Circle
            header="Powerwall"
            image={Image3}
            text={`${powerWall} k.W.`}
            addClass={"circle--3"}
            headerBelow={true}
          />
          <Circle
            header="National Grid"
            image={Image4}
            text={`${grid} k.W.`}
            addClass={"circle--4"}
            headerBelow={true}
          />
        </div>
      </div>
    </div>
  );
}
