import { useState } from "react";

const Form = ({ createTask }) => {
  // Valor del input del título de la tarea
  const [valueInput, setValueInput] = useState("");

  // Registramos la tarea
  // limpiamos el input
  const submitTask = e => {
    e.preventDefault();
    createTask(valueInput);
    setValueInput("");
  };

  // funcion disparada por el evento onchange
  // actualiza el valor que tendra el nombre de la tarea antes de registrar
  const addValue = e => {
    setValueInput(e.target.value);
  };

  return (
    <>
      <b>Titulo de la tarea</b>
      <br />
      <form onSubmit={e => submitTask(e)}>
        <input
          type="text"
          id="inputTask"
          onChange={addValue}
          value={valueInput}
        />
        <div>
          <label htmlFor="inputTask">
            <small>Escribe la tarea que deseas registrar</small>
          </label>
        </div>

        <div>
          <input
            className="btn btn-primary"
            type="submit"
            value="Registrar"
            disabled={!valueInput}
          />
        </div>
      </form>
    </>
  );
};
export default Form;
