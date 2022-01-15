import { useState, useEffect, useRef } from "react";

const Form = ({ createTask }) => {
  // Valor del input del título de la tarea
  const [valueInput, setValueInput] = useState("");
  const inputRef = useRef("");

  // funcion disparada por el evento onchange
  // actualiza el valor que tendra el nombre de la tarea antes de registrar
  const addValue = e => {
    setValueInput(e.target.value);
  };

  // Registramos la tarea
  // limpiamos el input
  const submitTask = e => {
    e.preventDefault();
    createTask(valueInput);
    setValueInput("");
    inputRef.current.focus();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <b>Titulo de la tarea</b>
      <br />
      <form onSubmit={e => submitTask(e)}>
        <input
          ref={inputRef}
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
