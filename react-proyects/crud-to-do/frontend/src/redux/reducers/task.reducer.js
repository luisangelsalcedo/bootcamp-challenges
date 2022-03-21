import { actions } from "../../constants";

const initialState = {
  currentEdit: {},
  loading: true,
  asigned: [],
  tasksList: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CREATE_TASK:
      return {
        ...state,
        tasksList: [...state.tasksList, action.payload],
        loading: false,
      };

    case actions.LOAD_TASKS:
      return { ...state, tasksList: action.payload, loading: false };

    case actions.EDIT_TASK:
      return { ...state, currentEdit: action.payload };

    case actions.UPDATE_TASK:
      return {
        ...state,
        tasksList: state.tasksList.map(task =>
          task._id === action.payload._id ? action.payload : task
        ),
        loading: false,
      };

    case actions.DELETE_TASK:
      return {
        ...state,
        tasksList: state.tasksList.filter(({ _id }) => _id !== action.payload),
        loading: false,
      };

    case actions.ADD_ASIGNEDS:
      return {
        ...state,
        asigned: state.asigned.map(task =>
          task._id === action.payload.taskID
            ? { ...task, asigned: action.payload.asigned }
            : task
        ),
      };

    case actions.LOADING_TASKS:
      return { ...state, loading: true };

    case actions.CLEAN_ALL:
      return { ...initialState };

    default:
      return state;
  }
};
