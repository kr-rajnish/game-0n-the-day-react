import React, { useState } from "react";

const opction = ["Cricket", "Football", "Hockey"];
const days = ["Weekday", "Weekend"];
function Gamedays() {
  const [game, setGame] = useState();
  const [day, setDay] = useState();
  return (
    <>
      <h1>Witch Game</h1>
      {opction.map((currval) => {
        console.log(currval);
        return (
          <>
            <input
              type="radio"
              id={currval}
              name="opction"
              value={currval}
              onChange={(e) => setGame(e.target.value)}
            />
            <label>{currval}</label>
          </>
        );
      })}

      <h1>Select days</h1>
      {days.map((currval) => {
        return (
          <>
            <input
              type="radio"
              name="days"
              value={currval}
              onChange={(e) => setDay(e.target.value)}
            />
            <label>{currval}</label>
          </>
        );
      })}
      <h3>You will play</h3>
      <p>
        {game} on the {day}
      </p>
    </>
  );
}
export default Gamedays;
