import React, { useContext } from "react";
import { CandidatosContext } from "../utils/CandidatosContext";

export const Porcentaje = () => {
  const { candidatos } = useContext(CandidatosContext);

  const totalVotos = candidatos.reduce((ini, curr) => ini + curr.votos, 0);
  return (
    <>
      <div className="card p-2 m-1 mt-2 d-flex flex-row text-center align-items-center">
        <h5>Porcentaje</h5>
        {candidatos.map((candidato, i) => (
          <div key={String(i)} className="candidatos">
            <div>{Math.round((candidato.votos * 100) / totalVotos) || 0}%</div>
            <div>{candidato.nombre}</div>
          </div>
        ))}
      </div>
    </>
  );
};
