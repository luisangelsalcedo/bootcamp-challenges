import { getAllUsersApi } from "../../api";
import { actions } from "../../constants";
import { setError } from "./message.actions";
/**
 *
 * * MIDDLEWARE
 *
 */
export const getAllUsersAsync = token => async dispatch => {
  const { message, users } = await getAllUsersApi(token);

  if (!!message) return dispatch(setError(message));
  dispatch(getAllUsers(users));
};
/**
 *
 * * ACTIONS
 *
 */
export const getAllUsers = users => ({
  type: actions.LOAD_USERS,
  payload: users,
});

export const cleanDataUsers = () => ({
  type: actions.CLEAN_ALL,
});
