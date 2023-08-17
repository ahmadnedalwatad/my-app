import { useState } from "react";

function BookingForm(props) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState({
    value: "",
    isTouched: false,
  });

  const availableTimes = props.data.map((time) => {
    return <option>{time}</option>;
  });

  const getIsFormValid = () => {
    return date && time && guests;
  };

  const clearForm = () => {
    setDate("");
    setTime("");
    setGuests("");
    setOccasion({
      value: "",
      isTouched: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <form
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      onSubmit={handleSubmit}
    >
      <fieldset>
        <div>
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          ></input>
        </div>

        <div>
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time "
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          >
            {availableTimes}
          </select>
        </div>

        <div>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guests}
            onChange={(e) => {
              setGuests(e.target.value);
            }}
          ></input>
        </div>

        <div>
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>

        <div>
          <button type="submit" disabled={!getIsFormValid()}>
            Submit
          </button>
        </div>
      </fieldset>
    </form>
  );
}

export default BookingForm;
