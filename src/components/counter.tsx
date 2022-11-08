/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect } from "react";
import { useGlobalContext } from "../context";

const Counter = () => {
  const { counterValue, setCounterValue } = useGlobalContext();

  const handleIncrementCall = () => {
    setCounterValue(counterValue + 1);
  };
  const handleDecrementCall = () => {
    if (counterValue > 1) setCounterValue(counterValue - 1);
  };

  return (
    <div className="main-component">
      <div className="div-design counter-div">
        <button className="btn-style" onClick={() => handleIncrementCall()}>
          + Button
        </button>
        <p>{counterValue}</p>
        <button className="btn-style" onClick={() => handleDecrementCall()}>
          - Button
        </button>
      </div>
      <h3>Counter component</h3>
    </div>
  );
};

export default Counter;
