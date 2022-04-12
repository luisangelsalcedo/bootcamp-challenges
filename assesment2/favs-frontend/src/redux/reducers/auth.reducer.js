import { TYPES } from "../../constants";

const initialState = () =>
  JSON.parse(localStorage.getItem("user")) || { logged: false };

const authReducer = (stare = initialState(), action) => {
  switch (action.type) {
    case TYPES.LOGIN:
      return stare;

    default:
      return stare;
  }
};

export default authReducer;
