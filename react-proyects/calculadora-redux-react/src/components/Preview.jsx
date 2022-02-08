import React from "react";
import { useSelector } from "react-redux";

export const Preview = () => {
  const { firstNumber, lastNumber, op } = useSelector(
    state => state.calculator
  );

  return (
    <div className="preview">{op && `${firstNumber} ${op} ${lastNumber}`}</div>
  );
};
