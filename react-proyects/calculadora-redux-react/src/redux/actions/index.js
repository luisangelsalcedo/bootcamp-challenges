import { types } from "../types";

const maxNumber = 9999999999;

export const validateNumber = str => dispatch => {
  if (str.length < String(maxNumber).length) dispatch(setTyping(str));
};

export const setTyping = str => ({
  type: types.TYPING,
  payload: str,
});

export const setOp = operation => ({
  type: types.SET_OPERATION,
  payload: operation,
});

export const setResult = obj => dispatch => {
  obj.op !== "+" || dispatch(addition());
  obj.op !== "-" || dispatch(sustraction());
  obj.op !== "x" || dispatch(multiplication());

  // validaciones no divisible entre 0
  obj.op === ":" && obj.lastNumber !== 0
    ? dispatch(division())
    : obj.op !== ":" || dispatch(cleanResult("0"));
};

export const addition = () => ({
  type: types.ADDITION,
});

export const sustraction = () => ({
  type: types.SUSTRACTION,
});

export const multiplication = () => ({
  type: types.MULTIPLICATION,
});

export const division = () => ({
  type: types.DIVISION,
});

export const clean = result => dispatch => {
  !!result && dispatch(cleanResult());
};

export const cleanResult = () => ({ type: types.CLEAN });

export const deleteNumber = result => dispatch => {
  if (result !== "") {
    const newValue = result.slice(0, -1); // eliminamos el último dígito
    dispatch(setTyping(newValue));
  }
};

export const setMode = mode => dispatch => {
  const newMode = !mode;
  localStorage.setItem("darkMode", newMode);
  dispatch(setDarkMode(newMode));
};

export const setDarkMode = newMode => ({
  type: types.SET_DARK_MODE,
  payload: newMode,
});
