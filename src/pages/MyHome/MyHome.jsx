import Circle from "../../components/Circle/Circle";

import HomePic from "../../assets/circle2.svg";
import PanelPic from "../../assets/circle1.svg";
import PowerWallPic from "../../assets/circle3.svg";
import GridPic from "../../assets/circle4.svg";

export default function MyHome() {
  return (
    <div>
      <Circle image={HomePic} />
      <Circle image={PanelPic} />
      <Circle image={PowerWallPic} />
      <Circle image={GridPic} />
    </div>
  );
}
