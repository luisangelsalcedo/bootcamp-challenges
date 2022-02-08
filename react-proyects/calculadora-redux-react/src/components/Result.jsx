import React from "react";
import { useSelector } from "react-redux";

export const Result = () => {
  const { result } = useSelector(state => state.calculator);
  return <div className="result">{!result ? "0" : result}</div>;
};
