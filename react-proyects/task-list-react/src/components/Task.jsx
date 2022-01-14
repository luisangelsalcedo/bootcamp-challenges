import { useState } from "react";
const Taks = ({
  name,
  state,
  id,
  updateNameTask,
  updateStateTask,
  deleteTask,
}) => {
  const countCaraterDefault = 150;

  const [isEdit, setIsEdit] = useState(false);
  const [nameTask, setNameTask] = useState(name);

  // si hay cambio en el name de la tarea llamamos la la funcion updateTask para actualizar la propiedad NAME
  // Desactivamos el modo de edición
  const saveTask = () => {
    if (name !== nameTask) {
      updateNameTask({ id: id, name: nameTask, state: state });
      setIsEdit(false);
    }
  };

  // Botones
  ////////////////////////////////////////////////////////////////////
  const btnEdit = () => (
    <span className="btn" onClick={() => setIsEdit(true)}>
      <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
    </span>
  );
  const btnDelete = () => (
    <span className="btn" onClick={() => deleteTask(id)}>
      <i className="fa fa-trash" aria-hidden="true"></i>
    </span>
  );
  const btnComplete = () => (
    <span className="btn text-success" onClick={() => updateStateTask(id)}>
      <i className="fa fa-2x fa-check" aria-hidden="true"></i>
    </span>
  );
  const btnIncomplete = () => (
    <span className="btn text-warning" onClick={() => updateStateTask(id)}>
      <i className="fa fa-2x fa-check" aria-hidden="true"></i>
    </span>
  );
  ////////////////////////////////////////////////////////////////////

  return (
    <div
      id={id}
      className={isEdit ? "taks-box edit" : "taks-box"}
      data-state={state ? "active" : ""}
    >
      {isEdit ? (
        // Modo edicion TRUE
        /////////////////////////////////////////////
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
        // Modo edicion FALSE
        /////////////////////////////////////////////
        <div className="task">
          <div>{state ? btnComplete() : btnIncomplete()}</div>
          <h5>{name}</h5>
          <div>{state ? btnDelete() : btnEdit()}</div>
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
