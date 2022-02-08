import React from "react";
import { useDispatch } from "react-redux";
import { setOp } from "../redux/actions";

export const Operations = () => {
  const dispatch = useDispatch();

  return (
    <div className="buttons_operations">
      <button onClick={() => dispatch(setOp(":"))}>:</button>
      <button onClick={() => dispatch(setOp("x"))}>x</button>
      <button onClick={() => dispatch(setOp("-"))}>-</button>
      <button onClick={() => dispatch(setOp("+"))}>+</button>
    </div>
  );
};
