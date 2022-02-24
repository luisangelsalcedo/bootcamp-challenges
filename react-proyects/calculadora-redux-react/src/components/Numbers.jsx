import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setResult, validateNumber } from "../redux/actions";

export const Numbers = () => {
  const dispatch = useDispatch();
  const calculator = useSelector(state => state.calculator);
  const { result } = calculator;

  const insertNumber = e => {
    const value = e.target.value;
    dispatch(validateNumber(`${result}${value}`));
  };

  return (
    <div className="buttons_numbers">
      <input type="button" onClick={insertNumber} value="9" />
      <input type="button" onClick={insertNumber} value="8" />
      <input type="button" onClick={insertNumber} value="7" />
      <input type="button" onClick={insertNumber} value="6" />
      <input type="button" onClick={insertNumber} value="5" />
      <input type="button" onClick={insertNumber} value="4" />
      <input type="button" onClick={insertNumber} value="3" />
      <input type="button" onClick={insertNumber} value="2" />
      <input type="button" onClick={insertNumber} value="1" />
      <input type="button" onClick={insertNumber} value="0" />
      <input type="button" onClick={insertNumber} value="." />
      <input
        value="="
        type="button"
        className="btnOp"
        onClick={() => dispatch(setResult(calculator))}
      />
    </div>
  );
};
