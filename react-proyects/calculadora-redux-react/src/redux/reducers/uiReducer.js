import { types } from "./../types/index";

const initialState = {
  darkMode: JSON.parse(localStorage.getItem("darkMode")),
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DARK_MODE:
      return { ...state, darkMode: action.payload };

    default:
      return state;
  }
};
