import "./Home.scss";
import Circle from "../../components/Circle/Circle";
import Image1 from "../../assets/circle1.svg";
import Image2 from "../../assets/circle2.svg";
import Image3 from "../../assets/circle3.svg";
import Image4 from "../../assets/circle4.svg";

export default function Home() {
  return (
    <div className="home">
      <h1>Hello Tammy</h1>
      <div className="home__circles">
        <Circle
          header="Solar Panel"
          image={Image1}
          text="4 k.W"
          addClass={"circle--1"}
        />
        <div className="home__circles-subgroup">
          <Circle
            linkTo={"/myhome"}
            header="My Home"
            image={Image2}
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
