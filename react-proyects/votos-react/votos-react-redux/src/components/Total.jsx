import React from "react";
import { useSelector } from "react-redux";

export const Total = () => {
  const candidatos = useSelector(state => state.candidatos);

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
