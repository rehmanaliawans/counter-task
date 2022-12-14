import React from "react";
import { useGlobalContext } from "../context";

const Division = () => {
  const { counterValue } = useGlobalContext();

  return (
    <div className="main-component">
      <div className="div-design">
        <div>6 / {counterValue}</div>
        <div className="result">{(6 / counterValue).toFixed(2)}</div>
      </div>
      <h3>Division component</h3>
    </div>
  );
};

export default Division;
