import React from "react";
import { Calculator } from "./Calculator";
import { Mode } from "./Mode";
import { useSelector } from "react-redux";

export const App = () => {
  const { darkMode } = useSelector(state => state.ui);
  return (
    <div className={darkMode ? "app dark" : "app "}>
      <h1 className="logo">Redux Calc</h1>
      <Calculator />
      <Mode />
    </div>
  );
};
