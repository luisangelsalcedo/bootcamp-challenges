import { TYPES } from "../../constants";

const initialState = () =>
  JSON.parse(localStorage.getItem("auth")) || { logged: false };

let authObject;
let logoutFalse;

const authReducer = (stare = initialState(), action) => {
  switch (action.type) {
    case TYPES.LOGIN:
      authObject = { logged: true, ...action.payload };
      localStorage.setItem("auth", JSON.stringify(authObject));
      return authObject;

    case TYPES.LOGOUT:
      logoutFalse = { logger: false };
      localStorage.setItem("auth", JSON.stringify(logoutFalse));
      return logoutFalse;

    default:
      return stare;
  }
};

export default authReducer;
