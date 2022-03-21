import { actions } from "../../constants";
import { setError, setMessage } from "./message.actions";
import { addTaskToBoard, removeTaskToBoard } from "./board.actions";
import {
  addTaskToBoardApi,
  createTaskApi,
  deleteTaskApi,
  loadTasksByBoardApi,
  removeTaskToBoardApi,
  updateTaskApi,
} from "../../api";

/**
 *
 * * MIDDLEWARE
 *
 */
export const loadTasksByBoardAsync = params => async dispatch => {
  dispatch(loadingTasks());
  const { message, ...tasks } = await loadTasksByBoardApi(params);

  if (!!message) return dispatch(setError(message));
  const arrTasks = Object.values(tasks);
  dispatch(loadTasks(arrTasks));
};

export const createTaskAsync = params => async dispatch => {
  dispatch(loadingTasks());
  const { message, ...task } = await createTaskApi(params);

  if (!!message) return dispatch(setError(message));

  const { token, boardID } = params;
  task &&
    addTaskToBoardApi({ token, boardID, taskID: task._id }).then(() => {
      dispatch(createtask(task));
      dispatch(addTaskToBoard({ boardID, task }));
      dispatch(setMessage(`${task.title} created`));
    });
};

export const updateTaskAsync = params => async dispatch => {
  dispatch(loadingTasks());
  const { message, ...task } = await updateTaskApi(params);

  if (!!message) return dispatch(setError(message));

  task && dispatch(updateTask(task));
  dispatch(setMessage(`${task.title} updated`));
};

export const deleteTaskAsync = params => async dispatch => {
  dispatch(loadingTasks());
  const { message, ...task } = await deleteTaskApi(params);

  if (!!message) return dispatch(setError(message));

  const { token, taskID } = params;
  task &&
    removeTaskToBoardApi({ token, boardID: task.board, taskID }).then(() => {
      dispatch(deleteTask(task._id));
      dispatch(removeTaskToBoard({ boardID: task.board, task }));
      dispatch(setMessage(`${task.title} deleted`));
    });
};

/**
 *
 * * ACTIONS
 *
 */
export const loadTasks = tasks => ({
  type: actions.LOAD_TASKS,
  payload: tasks,
});

export const loadingTasks = () => ({
  type: actions.LOADING_TASKS,
});

export const createtask = task => ({
  type: actions.CREATE_TASK,
  payload: task,
});

export const editTask = task => ({
  type: actions.EDIT_TASK,
  payload: task,
});

export const updateTask = task => ({
  type: actions.UPDATE_TASK,
  payload: task,
});

export const deleteTask = id => ({
  type: actions.DELETE_TASK,
  payload: id,
});

export const cleanDataTasks = () => ({
  type: actions.CLEAN_ALL,
});

// export const addAsignedsToTask = () => ({});

// export const getTaskById = () => ({});
