import "./DatePicker.scss";

function Datepicker({ date, setDate }) {
  return (
    <div className="datepicker">
      <h2 className="datepicker-title">Date:</h2>
      <input
        placeholder="today"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
}

export default Datepicker;
