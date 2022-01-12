import { useState } from "react";
const Taks = ({ name, state, id, updateTask, deleteTask }) => {
  const countCaraterDefault = 150;

  const [isEdit, setIsEdit] = useState(false);
  const [nameTask, setNameTask] = useState(name);

  // si hay cambio en el name de la tarea llamamos la la funcion updateTask para actualizar la propiedad NAME
  // Desactivamos el modo de edición
  const saveTask = () => {
    if (name !== nameTask) updateTask(id, "name", nameTask);
    setIsEdit(false);
  };

  return (
    <div
      className={isEdit ? "taks-box edit" : "taks-box"}
      data-state={state ? "active" : ""}
    >
      {isEdit ? (
        <div className="task-edit">
          <textarea
            onChange={e => {
              if (nameTask.length < countCaraterDefault)
                setNameTask(e.target.value);
            }}
            cols="40"
            rows="5"
            maxLength={countCaraterDefault}
            value={nameTask}
          ></textarea>
          <div className="caracteres">{nameTask.length}</div>
          <div className="btn-close" onClick={() => setIsEdit(false)}>
            <i className="fa fa-times-circle" aria-hidden="true"></i>
          </div>
          <div>
            <button className="btn btn-primary" onClick={saveTask}>
              Guardar cambios
            </button>
          </div>
        </div>
      ) : (
        <div className="task">
          <div>
            {state ? (
              <span
                className="btn text-success"
                onClick={() => updateTask(id, "state", false)}
              >
                <i className="fa fa-2x fa-check" aria-hidden="true"></i>
              </span>
            ) : (
              <span
                className="btn text-warning"
                onClick={() => updateTask(id, "state", true)}
              >
                <i className="fa fa-2x fa-check" aria-hidden="true"></i>
              </span>
            )}
          </div>
          <h5>{nameTask}</h5>
          <div>
            {state ? (
              <span className="btn" onClick={() => deleteTask(id)}>
                <i className="fa fa-trash" aria-hidden="true"></i>
              </span>
            ) : (
              <span className="btn" onClick={() => setIsEdit(true)}>
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
              </span>
            )}
          </div>
        </div>
      )}

      <div className="task-state">
        {state ? (
          <span className="text-success">Tarea completa</span>
        ) : (
          <span className="text-secundary">Tarea incompleta</span>
        )}
      </div>
    </div>
  );
};

export default Taks;
