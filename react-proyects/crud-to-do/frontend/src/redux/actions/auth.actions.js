import { actions } from "../../constants";
import { cleanMessage, setError, setMessage } from "./message.actions";
import {
  createGoogleUserApi,
  createUserApi,
  getUserAuthApi,
  loginApi,
  loginGoogleApi,
} from "../../api";
import { cleanDataBoards } from "./board.actions";
import { cleanDataUsers } from "./user.actions";
import { cleanDataTasks } from "./task.actions";
import { cleanDataModal } from "./modal.actions";

/**
 *
 * * MIDDLEWARE
 *
 */
export const loginAsync = user => async dispatch => {
  // obtenemos el token (llamada al API)
  const { message, token } = await loginApi(user);

  if (!!message) return dispatch(setError(message));

  token &&
    // verificamos el token y obtenemos el usuario autenticado (llamada al API)
    getUserAuthApi(token).then(userAuth => {
      dispatch(login(token));
      dispatch(getUserAuth(userAuth));
    });
};

export const createUserAsync = user => async dispatch => {
  const { message, notice } = await createUserApi(user);

  !!message && dispatch(setError(message));
  !!notice && dispatch(setMessage(notice));
};

export const logoutAsync = () => dispatch => {
  dispatch(cleanDataTasks());
  dispatch(cleanDataBoards());
  dispatch(cleanDataUsers());
  dispatch(cleanDataModal());
  dispatch(cleanMessage());
  dispatch(logout());
};
/**
 *
 *
 *
 *
 */

export const loginGoogleAsync = oauth => async dispatch => {
  const { profileObj } = oauth;
  let { token } = await loginGoogleApi({ profileObj });

  if (token) {
    // verificamos el token y obtenemos el usuario autenticado (llamada al API)
    getUserAuthApi(token).then(userAuth => {
      dispatch(login(token));
      dispatch(getUserAuth(userAuth));
    });
    return;
  }
  const user = await createGoogleUserApi({ profileObj });
  return dispatch(loginGoogleAsync(user)); // recursividad
};
/**
 *
 * * ACTIONS
 *
 */
export const login = token => ({
  type: actions.LOGIN,
  payload: token,
});

export const logout = () => ({
  type: actions.LOGOUT,
});

export const getUserAuth = userAuth => ({
  type: actions.GET_USER_AUTH,
  payload: userAuth,
});
