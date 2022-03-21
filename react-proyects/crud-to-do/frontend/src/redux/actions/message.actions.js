import { actions } from "../../constants";

export const setMessage = msj => ({
  type: actions.SET_MESSAGE,
  payload: msj,
});

export const setError = msj => ({
  type: actions.SET_ERROR,
  payload: msj,
});

export const cleanMessage = () => ({
  type: actions.CLEAN_MESSAGE,
});
