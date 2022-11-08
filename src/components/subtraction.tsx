import React from "react";
import { useGlobalContext } from "../context";

const Subtraction = () => {
  const { counterValue } = useGlobalContext();
  return (
    <div className="main-component">
      <div className="div-design">
        <div>4 - {counterValue}</div>
        <div className="result">{4 - counterValue}</div>
      </div>
      <h3>Subtraction component</h3>
    </div>
  );
};

export default Subtraction;
