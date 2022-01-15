import { useEffect, useReducer } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

import Form from "../components/Form";
import Task from "../components/Task";
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

const Principal = () => {
  const [state, dispatch] = useReducer(reducer, []);
  // const [tasksList, setTasksList] = useState([]); // Lista que contiene todos objetos tarea creados

  // ////////////////////////////////////////////////////////// CREATE
  const createTask = task => {
    dispatch({ type: ACTION.CREATE_TASK, payload: { task } });
    // setTasksList([
    //   ...tasksList,
    //   {
    //     id: new Date().getTime(),
    //     name: task,
    //     state: false,
    //   },
    // ]);
  };

  // ////////////////////////////////////////////////////////// UPDATE
  const updateNameTask = task => {
    dispatch({ type: ACTION.UPDATE_NAME_TASK, payload: { task } });
    // setTasksList(
    //   tasksList.map(t => {
    //     return t.id === task.id ? { ...t, name: task.name } : t;
    //   })
    // );
  };

  const updateStateTask = id => {
    dispatch({ type: ACTION.UPDATE_STATE_TASK, payload: { id } });
    // setTasksList(
    //   tasksList.map(task => {
    //     return task.id === id ? { ...task, state: !task.state } : task;
    //   })
    // );
  };

  ////////////////////////////////////////////////////////// DELETE
  const deleteTask = id => {
    dispatch({ type: ACTION.DELETE_TASK, payload: { id } });
    // setTasksList(tasksList.filter(task => task.id !== id));
  };

  // Cargar lista de tareas por primera vez
  useEffect(() => {
    dispatch({ type: ACTION.LOAD_TASKS });
    // setTasksList(tasksListDefault);
  }, []);

  return (
    <div className="App">
      <h1>Lista de tareas</h1>
      <Form createTask={createTask} />
      <hr />
      <div className="task-list">
        <div className="container">
          <div className="row d-flex justify-content-center">
            {state.map(({ id, name, state }) => (
              <Task
                key={id}
                name={name}
                state={state}
                id={id}
                updateNameTask={updateNameTask}
                updateStateTask={updateStateTask}
                deleteTask={deleteTask}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principal;
