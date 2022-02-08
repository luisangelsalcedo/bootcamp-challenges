import React, { useContext } from "react";
import { CandidatosContext } from "../utils/CandidatosContext";

export const Total = () => {
  const { candidatos } = useContext(CandidatosContext);

  const totalVotos = candidatos.reduce((ini, curr) => ini + curr.votos, 0);

  return (
    <div className="d-flex">
      <div className="card candidatos p-2 m-1 d-flex flex-row justify-content-between">
        <h5>Total de candidatos: </h5>
        <h5> {candidatos.length}</h5>
      </div>
      <div className="card candidatos p-2 m-1 d-flex flex-row justify-content-between">
        <h5>Total de votos: </h5>
        <h5> {totalVotos}</h5>
      </div>
    </div>
  );
};
