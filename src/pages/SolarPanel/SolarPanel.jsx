import React from "react";
import Card from "../../components/Card/Card";
import MenuBar from "../../components/MenuBar/MenuBar";

function SolarPanel() {
  return (
    <div>
      <MenuBar selected={"Panel"} />
      <Card />
    </div>
  );
}

export default SolarPanel;
