import { useState } from "react";

export const FunctionalTrafficLight = () => {

  const [currentColor, setCurrentColor] = useState(2);

  const greenLight = (currentColor === 0) ? "green" : "black";
  const yellowLight = (currentColor === 1) ? "yellow" : "black";
  const redLight = (currentColor === 2) ? "red" : "black";

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div className={`circle ${redLight}`}></div>
        <div className={`circle ${yellowLight}`}></div>
        <div className={`circle ${greenLight}`}></div>
      </div>
      <button className="next-state-button" onClick={() => {
        setCurrentColor((currentColor + 1) % 3);
      }}>
        Next State
      </button>
    </div>
  );
};
