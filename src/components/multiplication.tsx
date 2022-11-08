import React from "react";
import { useGlobalContext } from "../context";

const Multiplication = () => {
  const { counterValue } = useGlobalContext();
  return (
    <div className="main-component">
      <div className="div-design">
        <div>-5 * {counterValue}</div>
        <div className="result">{-5 * counterValue}</div>
      </div>
      <h3>Multiplication component</h3>
    </div>
  );
};

export default Multiplication;
