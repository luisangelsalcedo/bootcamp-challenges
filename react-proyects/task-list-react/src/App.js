import { useEffect, useState } from "react";
import "./App.css";
import Task from "./Task";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

function App() {
  const [newTask, setNewTask] = useState(""); // Valor del input del título de la tarea
  const [taskListHistory, setTaskListHistory] = useState([]); //array almacena todos los registros para usar ID correlativo
  const [taskList, setTaskList] = useState([]); // Lista que contiene todos objetos tarea creados

  // ////////////////////////////////////////////////////////// CREATE
  // funcion disparada por el evento onsubmit
  // validamos que el nombre de la tarea no esté vacío
  // insertamos la nueva tarea como objeto dentro del array de lista
  // limpiamos el input del título de la tarea
  const createTask = e => {
    e.preventDefault();
    if (newTask.length > 0) {
      setTaskListHistory([...taskListHistory, newTask]);
      setTaskList([
        ...taskList,
        {
          id: taskListHistory.length,
          name: newTask,
          state: false,
        },
      ]);
      setNewTask("");
    }
  };
  // funcion disparada por el evento onchange
  // actualiza el valor que tendra el nombre de la tarea antes de registrar
  const addValue = e => {
    setNewTask(e.target.value);
  };
  // ////////////////////////////////////////////////////////// UPDATE
  // funcion generica que actualiza cada propiedad del objeto tarea dentro de la lista
  const updateTask = (currentId, prop, value) => {
    taskList.forEach(({ id }, i) => {
      if (id === currentId) taskList[i][prop] = value;
    });
    setTaskList([...taskList]);
  };
  // ////////////////////////////////////////////////////////// DELETE
  // funcion que busca una tarea dentro de la lista por medio de su ID
  // y la excluye del nuevo array de tareas generado
  const deleteTask = currentId => {
    const newlist = taskList.filter(task => task.id !== currentId);
    setTaskList(newlist);
  };

  // ver la construccion del array taskList (console.log)
  useEffect(() => {
    console.log(taskList);
  }, [taskList]);

  return (
    <div className="App">
      <h1>Lista de tareas</h1>
      <b>Titulo de la tarea</b>
      <br />
      <form onSubmit={e => createTask(e)}>
        <input type="text" id="inputTask" onChange={addValue} value={newTask} />
        <div>
          <label htmlFor="inputTask">
            <small>Escribe la tarea que deseas registrar</small>
          </label>
        </div>

        <div>
          <input className="btn btn-primary" type="submit" value="Registrar" />
        </div>
      </form>
      <hr />
      <div className="task-list">
        <div className="container">
          <div className="row d-flex justify-content-center">
            {taskList.map(({ id, name, state }) => (
              <Task
                key={id}
                name={name}
                state={state}
                id={id}
                updateTask={updateTask}
                deleteTask={deleteTask}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
