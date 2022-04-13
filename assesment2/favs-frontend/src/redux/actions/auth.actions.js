import { TYPES } from "../../constants";

// actions
export const login = (user) => ({
  type: TYPES.LOGIN,
  payload: user,
});

export const register = (user) => ({
  type: TYPES.REGISTER,
  payload: user,
});

export const logout = () => ({
  type: TYPES.LOGOUT,
});
