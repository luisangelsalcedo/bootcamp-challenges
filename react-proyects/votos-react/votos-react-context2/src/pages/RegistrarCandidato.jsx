import React, { useContext, useState } from "react";
import { CandidatosContext } from "./../utils/CandidatosContext";

export const RegistrarCandidato = () => {
  const { nuevoCandidato } = useContext(CandidatosContext);
  const [candidato, setCandidato] = useState(null);
  ///////////////////////////////////////////////////
  const handleSubmit = e => {
    e.preventDefault();
    candidato === null || nuevoCandidato(candidato);
  };
  ///////////////////////////////////////////////////
  const handleChange = inputName => e => {
    setCandidato({ ...candidato, [inputName]: e.target.value });
  };
  ///////////////////////////////////////////////////
  return (
    <div className="d-flex flex-column align-items-center">
      <h3>Registar Candidato</h3>
      <hr />

      <div className="formulario">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre*"
                name="nombre"
                onChange={handleChange("nombre")}
              />
            </div>
            <div className="form-group col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Apellido"
                name="apellido"
                onChange={handleChange("apellido")}
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Propuestas"
              name="propuestas"
              onChange={handleChange("propuestas")}
            />
          </div>
          <button className="btn btn-primary btn-block">Registrar</button>
        </form>
      </div>
    </div>
  );
};
