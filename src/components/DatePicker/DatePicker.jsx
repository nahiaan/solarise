import React, { useState } from "react";
import "./DatePicker.scss";

function Datepicker() {
  const [date, setDate] = useState();
  return (
    <div className="datepicker">
      <h2 className="datepicker-title">Date:</h2>
      <input
        placeholder="today"
        type="date"
        value="2022-07-29"
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
}

export default Datepicker;
