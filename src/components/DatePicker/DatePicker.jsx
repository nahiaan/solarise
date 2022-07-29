import React, { useState } from "react";
import "./DatePicker.scss";

function Datepicker() {
  const [date, setDate] = useState();
  return (
    <div className="datepicker">
      <h3>Date:</h3>
      <input
        placeholder="today"
        type="date"
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
}

export default Datepicker;
