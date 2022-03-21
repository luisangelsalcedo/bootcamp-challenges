import { actions } from "../../constants";

const initialState = {
  message: "",
  type: "secundary",
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_MESSAGE:
      return { message: action.payload, type: "primary" };

    case actions.SET_ERROR:
      return { message: action.payload, type: "danger" };

    case actions.CLEAN_MESSAGE:
      return { ...initialState };

    default:
      return state;
  }
};
