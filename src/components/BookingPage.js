import BookingForm from "./BookingForm";
import { useReducer } from "react";

//In the Main component, create a function named updateTimes which will handle the state change.
//This function will change the availableTimes based on the selected date.
//for now, the function can return the same available times regardless of the date.
function updateTimes() {}

//Next, create a function called initializeTimes which will create the initial state for the availableTimes.
function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}
//Then, change availableTimes to a reducer using the useReducer function and provide the two previous functions as parameters.

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <>
      <h1>welcome to my booking page</h1>
      <BookingForm data={availableTimes} />
    </>
  );
}

export default BookingPage;
