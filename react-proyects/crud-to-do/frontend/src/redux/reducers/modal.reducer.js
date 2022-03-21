import { actions } from "../../constants";

const initialState = {
  show: false,
  element: "",
  color: "secundary",
};
export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SHOW_MODAL:
      return {
        show: true,
        element: action.payload.element,
        color: action.payload.color,
      };

    case actions.HIDE_MODAL:
      return { ...state, show: false, element: "" };

    case actions.CLEAN_ALL:
      return { ...initialState };

    default:
      return state;
  }
};
