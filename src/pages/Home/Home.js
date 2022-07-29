import React, { useState } from "react";
import "./Home.scss";
import Datepicker from "../../components/Datepicker";
import Card from "../../components/Card/Card";

function Home() {
  return (
    <div className="div">
      <Datepicker />
      <Card />
    </div>
  );
}

// the information will be in state -

export default Home;
