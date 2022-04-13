import { TYPES } from "../../constants";

const initialState = () =>
  JSON.parse(localStorage.getItem("auth")) || { logged: false };

const authReducer = (stare = initialState(), action) => {
  switch (action.type) {
    case TYPES.LOGIN:
      return { logged: true, ...action.payload };

    default:
      return stare;
  }
};

export default authReducer;
