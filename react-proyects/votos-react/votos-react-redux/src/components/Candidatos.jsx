import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { votar } from "../redux/features/candidatosSlice";

export const Candidatos = () => {
  const candidatos = useSelector(state => state.candidatos);
  const dispatch = useDispatch();

  return (
    <div className="d-flex">
      {candidatos.map((candidato, i) => (
        <div key={String(i)} className="card candidatos text-center p-2 m-1">
          <h5>{candidato.nombre}</h5>

          <button
            className="btn btn-primary"
            onClick={() => dispatch(votar(candidato))}
          >
            Votar
          </button>
        </div>
      ))}
    </div>
  );
};
