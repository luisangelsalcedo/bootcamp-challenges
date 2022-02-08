import { types } from "../types";

const initialState = {
  firstNumber: 0,
  lastNumber: 0,
  result: "",
  op: false,
};
export const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TYPING:
      return {
        ...state,
        result: action.payload,
        firstNumber: !state.op ? Number(action.payload) : state.firstNumber,
        lastNumber: state.op ? Number(action.payload) : state.lastNumber,
      };

    case types.SET_OPERATION:
      return {
        ...state,
        result: "",
        lastNumber: 0,
        op: action.payload,
      };

    case types.ADDITION:
      return {
        ...state,
        result: String(state.firstNumber + state.lastNumber),
        firstNumber: state.firstNumber + state.lastNumber,
        op: false,
      };

    case types.SUSTRACTION:
      return {
        ...state,
        result: String(state.firstNumber - state.lastNumber),
        firstNumber: state.firstNumber - state.lastNumber,
        op: false,
      };

    case types.MULTIPLICATION:
      return {
        ...state,
        result: String(state.firstNumber * state.lastNumber),
        firstNumber: state.firstNumber * state.lastNumber,
        op: false,
      };

    case types.DIVISION:
      return {
        ...state,
        result: String(state.firstNumber / state.lastNumber),
        firstNumber: state.firstNumber / state.lastNumber,
        op: false,
      };

    case types.CLEAN:
      return initialState;

    default:
      return state;
  }
};
