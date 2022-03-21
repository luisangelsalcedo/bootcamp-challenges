import axios from "axios";
import { endpoint } from "../constants";

const authorization = token => ({
  headers: {
    "Content-Type": "application/json",
    authorization: "Bearer " + token,
  },
});

/**
 *
 * * LOGIN
 * llamada al endpoint de login usando el método POST para obtener el token de atorización
 *
 */
export const loginApi = async user => {
  try {
    const response = await axios.post(endpoint.LOGIN, user, {
      headers: { "Content-Type": "application/json" },
    });

    // const { token } = response.data;
    // const userAuth = await getUserAuthApi(token);

    // return { userAuth, token };
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
/**
 * * CREATE USER
 * llamada al endpoint de crear usuario usando el método POST para registrar un nuevo usuario en la base de datos
 *
 */

export const createUserApi = async user => {
  try {
    const response = await axios.post(endpoint.USER, user, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
/**
 * * GET USER ID
 * llamada al endpoint de verificar token usando el metodo GET para obtener el id y el nombre del usuario guardado en el payload del token
 * Necesita authorization : Bearer [token]
 */
export const getUserAuthApi = async token => {
  try {
    const response = await axios.get(
      `${endpoint.GET_USER_AUTH}/${token}`,
      authorization(token)
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
/**
 * * GET USERS
 * Necesita authorization : Bearer [token]
 *
 */
export const getAllUsersApi = async token => {
  try {
    const response = await axios.get(endpoint.USERS, authorization(token));

    return { users: response.data };
  } catch (error) {
    return error.response.data;
  }
};
/**
 *
 * @LOGIN_GOOGLE
 *
 *
 */
export const loginGoogleApi = async user => {
  try {
    const response = await axios.post(endpoint.LOGIN_GOOGLE, user, {
      headers: { "Content-Type": "application/json" },
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
/**
 * @CREATE_USER_GOOGLE
 *
 *
 */

export const createGoogleUserApi = async user => {
  try {
    const response = await axios.post(endpoint.USER_GOOGLE, user, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/**
 * * GET BOARDS BY ID
 * llamada a endpoint de api usando el método GET para obtener una lista de board propietarios y board donde estoy invitado
 * Necesita authorization : Bearer [token]
 *
 */
export const loadBoardsByUserApi = async ({ token, id }) => {
  try {
    const response = await axios.get(
      `${endpoint.GET_BOARDS_BY_USER}/${id}`,
      authorization(token)
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
/**
 * * CREATE BOARD
 * Llamada a endpoint de api usando el método POST para crear un board owner
 * Necesita authorization : Bearer [token]
 *
 */
export const createBoardApi = async ({ token, board }) => {
  try {
    const response = await axios.post(
      endpoint.BOARD,
      board,
      authorization(token)
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
/**
 * * UPDATE BOARD
 *
 */
export const updateBoardApi = async ({ token, boardID, board }) => {
  try {
    const response = await axios.put(
      `${endpoint.BOARD}/${boardID}`,
      board,
      authorization(token)
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
/**
 * * DELETE BOARD
 *
 */
export const deleteBoardApi = async ({ token, boardID }) => {
  try {
    const response = await axios.delete(
      `${endpoint.BOARD}/${boardID}`,
      authorization(token)
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
/**
 * * GET BOARD BY ID
 *
 */
export const getBoardByIdApi = async ({ token, boardID }) => {
  try {
    const response = await axios.get(
      `${endpoint.BOARD}/${boardID}`,
      authorization(token)
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

/**
 * * ADD TASK TO BOARD
 *
 */
export const addTaskToBoardApi = async ({ token, boardID, taskID }) => {
  try {
    const response = await axios.post(
      `${endpoint.BOARD}/${boardID}/addtask`,
      { taskID },
      authorization(token)
    );

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
/**
 * * REMOVE TASK TO BOARD
 *
 */
export const removeTaskToBoardApi = async ({ token, boardID, taskID }) => {
  try {
    const response = await axios.post(
      `${endpoint.BOARD}/${boardID}/removetask`,
      { taskID },
      authorization(token)
    );

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/**
 * * GET TASK BY BOARD
 *
 */
export const loadTasksByBoardApi = async ({ token, boardID }) => {
  try {
    const response = await axios.get(
      `${endpoint.GET_TASKS_BY_BOARD}/${boardID}`,
      authorization(token)
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
/**
 * * CREATE TASK
 *
 */
export const createTaskApi = async ({ token, boardID, title }) => {
  try {
    const response = await axios.post(
      endpoint.TASK,
      { title, board: boardID },
      authorization(token)
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
/**
 * * UPDATE TASK
 *
 */
export const updateTaskApi = async ({ token, taskID, task }) => {
  try {
    const response = await axios.put(
      `${endpoint.TASK}/${taskID}`,
      task,
      authorization(token)
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
/**
 * * DELETE TASK
 *
 */
export const deleteTaskApi = async ({ token, taskID }) => {
  try {
    const response = await axios.delete(
      `${endpoint.TASK}/${taskID}`,
      authorization(token)
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
