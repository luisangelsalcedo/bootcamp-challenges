import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setResult, validateNumber } from "../redux/actions";

export const Numbers = () => {
  const dispatch = useDispatch();
  const calculator = useSelector(state => state.calculator);
  const { result } = calculator;

  return (
    <div className="buttons_numbers">
      <button onClick={() => dispatch(validateNumber(`${result}9`))}>9</button>
      <button onClick={() => dispatch(validateNumber(`${result}8`))}>8</button>
      <button onClick={() => dispatch(validateNumber(`${result}7`))}>7</button>
      <button onClick={() => dispatch(validateNumber(`${result}6`))}>6</button>
      <button onClick={() => dispatch(validateNumber(`${result}5`))}>5</button>
      <button onClick={() => dispatch(validateNumber(`${result}4`))}>4</button>
      <button onClick={() => dispatch(validateNumber(`${result}3`))}>3</button>
      <button onClick={() => dispatch(validateNumber(`${result}2`))}>2</button>
      <button onClick={() => dispatch(validateNumber(`${result}1`))}>1</button>
      <button onClick={() => dispatch(validateNumber(`${result}0`))}>0</button>
      <button onClick={() => dispatch(validateNumber(`${result}.`))}>.</button>
      <button onClick={() => dispatch(setResult(calculator))} className="btnOp">
        =
      </button>
    </div>
  );
};
