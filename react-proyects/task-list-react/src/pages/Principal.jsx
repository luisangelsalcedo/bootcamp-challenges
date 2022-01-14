import { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

import Task from "../components/Task";
import tasksListDefault from "../helpers/tasksList";
import Form from "../components/Form";

const Principal = () => {
  const [tasksList, setTasksList] = useState([]); // Lista que contiene todos objetos tarea creados

  // ////////////////////////////////////////////////////////// CREATE
  const createTask = task => {
    setTasksList([
      ...tasksList,
      {
        id: new Date().getTime(),
        name: task,
        state: false,
      },
    ]);
  };

  // ////////////////////////////////////////////////////////// UPDATE
  const updateNameTask = task => {
    setTasksList(
      tasksList.map(t => {
        return t.id === task.id ? { ...t, name: task.name } : t;
      })
    );
  };

  const updateStateTask = id => {
    setTasksList(
      tasksList.map(task => {
        return task.id === id ? { ...task, state: !task.state } : task;
      })
    );
  };

  ////////////////////////////////////////////////////////// DELETE
  const deleteTask = id => {
    setTasksList(tasksList.filter(task => task.id !== id));
  };

  // Cargar lista de tareas por primera vez
  useEffect(() => {
    setTasksList(tasksListDefault);
  }, []);

  useEffect(() => {
    console.log(tasksList);
  }, [tasksList]);

  return (
    <div className="App">
      <h1>Lista de tareas</h1>
      <Form createTask={createTask} />
      <hr />
      <div className="task-list">
        <div className="container">
          <div className="row d-flex justify-content-center">
            {tasksList.map(({ id, name, state }) => (
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
