import "./MyHome.scss";

import MenuBar from "../../components/MenuBar/MenuBar";
import LinePlot from "../../components/LinePlot/LinePlot";
import DatePicker from "../../components/DatePicker/DatePicker";

export default function MyHome() {
  return (
    <main class="myhome">
      <MenuBar selected={"Home"} />
      <div class="myhome__headers">
        <h2 class="myhome__headers--selected">Usage</h2>
        <h2>Savings</h2>
      </div>
      <DatePicker />
      <h2>Average usage:</h2>
      <div className="myhome__plot-wrapper">
        <LinePlot />
      </div>
    </main>
  );
}
