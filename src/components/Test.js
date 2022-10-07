import React, { useState } from "react";

const Test = () => {
  require("../index.css");

  const [counter, setCounter] = useState(0);
  const [setter, setSetter] = useState(0);

  const handleChange = (e) => {
    setSetter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCounter(setter);
    setSetter(0);
  };

  return (
    <>
      <div className="main">
        <div className="top-right-square"></div>
        <h1>Test Text</h1>
        <h1 className="counter-number">{counter}</h1>
        <form onSubmit={handleSubmit}>
          <div className="bottom-panels">
            <div className="counter">
              <h3>Counter Start</h3>
              <input type="number" required value={setter} onChange={handleChange} />
            </div>
            <div className="set-button">
              <button type="submit">Set</button>
            </div>
            <div className="add-button">
              <button
                type="button"
                onClick={() => {
                  setCounter(Number(counter) + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Test;
