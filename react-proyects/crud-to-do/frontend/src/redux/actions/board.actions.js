import { actions } from "../../constants";
import { setError, setMessage } from "./message.actions";
import {
  deleteBoardApi,
  getBoardByIdApi,
  loadBoardsByUserApi,
  updateBoardApi,
  createBoardApi,
} from "../../api";

/**
 *
 * * MIDDLEWARE
 *
 */
export const loadBoardsByUserAsync = params => async dispatch => {
  dispatch(loadingBoards());
  const { message, boardOwner, boardGuest } = await loadBoardsByUserApi(params);

  if (!!message) return dispatch(setError(message));
  dispatch(loadBoards({ boardOwner, boardGuest }));
};

export const createBoardAsync = params => async dispatch => {
  dispatch(loadingBoards());
  const { message, ...board } = await createBoardApi(params);

  if (!!message) return dispatch(setError(message));
  dispatch(createBoard(board));
  dispatch(setMessage(`${board.title} created`));
};

export const updateBoardAsync = params => async dispatch => {
  dispatch(loadingBoards());
  const { message, ...board } = await updateBoardApi(params);

  if (!!message) return dispatch(setError(message));
  dispatch(updateBoard(board));
  dispatch(setMessage(`${board.title} updated`));
};

export const deleteBoardAsync = params => async dispatch => {
  dispatch(loadingBoards());
  const { message, ...board } = await deleteBoardApi(params);

  if (!!message) return dispatch(setError(message));
  /**
   * CODE
   * eliminar las tareas contenidas
   *
   * */
  dispatch(deleteBoard(board._id));
  dispatch(setMessage(`${board.title} deleted`));
};

export const getBoardByIdAsync = params => async dispatch => {
  dispatch(loadingBoards());
  const { message, ...board } = await getBoardByIdApi(params);

  if (!!message) return dispatch(setError(message));
  dispatch(getBoardById(board));
};
/**
 *
 * * ACTIONS
 *
 */
export const loadBoards = boards => ({
  type: actions.LOAD_BOARDS,
  payload: boards,
});

export const loadingBoards = () => ({
  type: actions.LOADING_BOARDS,
});

export const createBoard = board => ({
  type: actions.CREATE_BOARD,
  payload: board,
});

export const editBoard = board => ({
  type: actions.EDIT_BOARD,
  payload: board,
});

export const updateBoard = board => ({
  type: actions.UPDATE_BOARD,
  payload: board,
});

export const deleteBoard = id => ({
  type: actions.DELETE_BOARD,
  payload: id,
});

export const getBoardById = board => ({
  type: actions.GET_BOARD_BY_ID,
  payload: board,
});

export const cleanDataBoards = () => ({
  type: actions.CLEAN_ALL,
});

export const addTaskToBoard = ({ boardID, task }) => ({
  type: actions.ADD_TASK,
  payload: { boardID, task },
});

export const removeTaskToBoard = ({ boardID, task }) => ({
  type: actions.REMOVE_TASK,
  payload: { boardID, task },
});
