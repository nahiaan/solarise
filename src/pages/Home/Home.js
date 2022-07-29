import "./Home.scss";
import Circle from "../../components/Circle/Circle";
import Image1 from "../../assets/circle1.svg";
import Image3 from "../../assets/circle3.svg";
import Image4 from "../../assets/circle4.svg";
import ImageHome from "../../assets/Home-lightening.svg";
import LeftLine from "../../assets/LeftLine.svg";
import RightLine from "../../assets/RightLine.svg";
import MiddleLine from "../../assets/MiddleLine.svg";

export default function Home() {
  return (
    <div className="home">
      <h1 className="home__title">Hello Tammy</h1>
      <div className="home__circles">
        <Circle
          linkTo={"/solarpanel"}
          header="Solar Panel"
          image={Image1}
          text="4 k.W"
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
            text="6.7 k.W"
            addClass={"circle--2"}
            headerBelow={true}
          />
          <Circle
            header="Powerwall"
            image={Image3}
            text="8.5 k.W"
            addClass={"circle--3"}
            headerBelow={true}
          />
          <Circle
            header="National Grid"
            image={Image4}
            text="10 k.W"
            addClass={"circle--4"}
            headerBelow={true}
          />
        </div>
      </div>
    </div>
  );
}
