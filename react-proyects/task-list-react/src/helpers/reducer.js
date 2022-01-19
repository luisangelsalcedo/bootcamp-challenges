import ACTION from "../helpers/actions";
import tasksListDefault from "../helpers/tasksList";

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.LOAD_TASKS:
      return tasksListDefault;

    case ACTION.CREATE_TASK:
      return [
        ...state,
        {
          id: new Date().getTime(),
          name: action.payload.task,
          state: false,
        },
      ];

    case ACTION.UPDATE_STATE_TASK:
      return state.map(task =>
        task.id === action.payload.id ? { ...task, state: !task.state } : task
      );

    case ACTION.UPDATE_NAME_TASK:
      return state.map(task => {
        return task.id === action.payload.task.id
          ? { ...task, name: action.payload.task.name }
          : task;
      });

    case ACTION.DELETE_TASK:
      return state.filter(task => task.id !== action.payload.id);

    default:
      return state;
  }
};

export default reducer;
