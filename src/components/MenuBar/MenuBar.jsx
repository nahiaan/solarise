import "./MenuBar.scss";
import CircleSmall from "../../components/Circle/CircleSmall";

import HomePic from "../../assets/circle2.svg";
import PanelPic from "../../assets/circle1.svg";
import PowerWallPic from "../../assets/circle3.svg";
import GridPic from "../../assets/circle4.svg";

export default function MyHome({ selected }) {
  return (
    <div className="menu__bar">
      <CircleSmall
        image={HomePic}
        addClass={`circle--menu ${
          selected === "Home" ? "circle--menu-selected" : ""
        } `}
      />
      <CircleSmall
        image={PanelPic}
        addClass={`circle--menu ${
          selected === "Panel" ? "circle--menu-selected" : ""
        } `}
      />
      <CircleSmall
        image={PowerWallPic}
        addClass={`circle--menu ${
          selected === "PowerWall" ? "circle--menu-selected" : ""
        } `}
      />
      <CircleSmall
        image={GridPic}
        addClass={`circle--menu ${
          selected === "Grid" ? "circle--menu-selected" : ""
        } `}
      />
    </div>
  );
}
