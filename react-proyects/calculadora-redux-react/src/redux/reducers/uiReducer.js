import { types } from "./../types/index";

const initialState = {
  darkMode: true,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DARK_MODE:
      return { ...state, darkMode: !state.darkMode };

    default:
      return state;
  }
};
