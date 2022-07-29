import React, { useState } from "react";

function Datepicker() {
  const [date, setDate] = useState();
  return (
    <div>
      <h1>Select Date:</h1>
      <input
        placeholder="today"
        type="date"
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
}

export default Datepicker;
