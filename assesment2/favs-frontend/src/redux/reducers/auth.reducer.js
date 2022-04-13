import { TYPES } from "../../constants";

const initialState = () =>
  JSON.parse(localStorage.getItem("auth")) || { logged: false };

let authObject;

const authReducer = (stare = initialState(), action) => {
  switch (action.type) {
    case TYPES.LOGIN:
      authObject = { logged: true, ...action.payload };
      localStorage.setItem("auth", JSON.stringify(authObject));
      return authObject;

    default:
      return stare;
  }
};

export default authReducer;
