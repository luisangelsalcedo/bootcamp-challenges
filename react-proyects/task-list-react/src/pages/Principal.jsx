import { useEffect, useReducer } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

import Form from "../components/Form";
import Task from "../components/Task";
import ACTION from "../helpers/actions";
import reducer from "./../helpers/reducer";

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
