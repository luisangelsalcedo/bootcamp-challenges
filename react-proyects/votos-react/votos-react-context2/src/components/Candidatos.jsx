import React, { useContext } from "react";
import { CandidatosContext } from "./../utils/CandidatosContext";

export const Candidatos = () => {
  const { candidatos, votar } = useContext(CandidatosContext);

  return (
    <div className="d-flex">
      {candidatos.map((canditado, i) => (
        <div key={String(i)} className="card candidatos text-center p-2 m-1">
          <h5>{canditado.nombre}</h5>

          <button className="btn btn-primary" onClick={() => votar(canditado)}>
            Votar
          </button>
        </div>
      ))}
    </div>
  );
};
