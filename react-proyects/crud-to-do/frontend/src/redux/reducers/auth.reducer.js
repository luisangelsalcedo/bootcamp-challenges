import { actions } from "../../constants";

const initialState = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};
export const authReducer = (state = initialState(), action) => {
  switch (action.type) {
    case actions.LOGIN:
      return { logged: true, token: action.payload };

    case actions.LOGOUT:
      return { logged: false };

    case actions.GET_USER_AUTH:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
