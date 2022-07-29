import "./MyHome.scss";

import { useState } from "react";

import MenuBar from "../../components/MenuBar/MenuBar";
import LinePlot from "../../components/LinePlot/LinePlot";
import DatePicker from "../../components/DatePicker/DatePicker";

export default function MyHome() {
  const [date, setDate] = useState("2022-07-29");

  return (
    <main class="myhome">
      <MenuBar selected={"Home"} />
      <div class="myhome__headers">
        <h2 class="myhome__headers--selected">Usage</h2>
        <h2>Savings</h2>
      </div>
      <DatePicker date={date} setDate={setDate} />
      <h2>Average usage:</h2>
      <div className="myhome__plot-wrapper">
        <LinePlot date={date} />
      </div>
    </main>
  );
}
