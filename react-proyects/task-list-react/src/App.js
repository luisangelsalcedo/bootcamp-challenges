import { useEffect, useState } from "react";
import "./App.css";
import Task from "./Task";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

function App() {
  const [newTask, setNewTask] = useState("");
  const [taskListHistory, setTaskListHistory] = useState([]); //array almacena todos los registros para usar ID correlativo
  const [taskList, setTaskList] = useState([]);

  const registrarTarea = e => {
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

  const addValue = e => {
    setNewTask(e.target.value);
  };

  const setTask = (currentId, prop, value) => {
    taskList.forEach(({ id }, i) => {
      if (id === currentId) taskList[i][prop] = value;
    });
    setTaskList([...taskList]);
  };

  const deleteTask = currentId => {
    const newlist = taskList.filter(task => task.id !== currentId);
    setTaskList(newlist);
  };

  useEffect(() => {
    console.log(taskList);
  }, [taskList]);

  return (
    <div className="App">
      <h1>Lista de tareas</h1>
      <b>Titulo de la tarea</b>
      <br />
      <form onSubmit={e => registrarTarea(e)}>
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
                setStateTaks={setTask}
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
