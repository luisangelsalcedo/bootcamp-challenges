import React from "react";
import { useSelector } from "react-redux";

export const Escrutinio = () => {
  const candidatos = useSelector(state => state.candidatos);
  return (
    <>
      <div className="card p-2 m-1 d-flex flex-row text-center align-items-center">
        <h5>Escrutinio</h5>
        {candidatos.map((candidato, i) => (
          <div key={String(i)} className="candidatos">
            <div>{candidato.votos}</div>
            <div>{candidato.nombre}</div>
          </div>
        ))}
      </div>
    </>
  );
};
