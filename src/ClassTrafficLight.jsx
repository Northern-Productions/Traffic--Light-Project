import { Component } from "react";

export class ClassTrafficLight extends Component {
    state = {
      currentColor: 2,
    };

  render() {
    const { currentColor } = this.state;

    const greenLight = currentColor === 0 ? "green" : "black";
    const yellowLight = currentColor === 1 ? "yellow" : "black";
    const redLight = currentColor === 2 ? "red" : "black";

    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div className={`circle ${redLight}`}></div>
          <div className={`circle ${yellowLight}`}></div>
          <div className={`circle ${greenLight}`}></div>
        </div>
        <button
          className="next-state-button"
          onClick={() => {
            this.setState(() => ({
              currentColor: (currentColor + 1) % 3,
            }));
          }}
        >
          Next State
        </button>
      </div>
    );
  }
}
