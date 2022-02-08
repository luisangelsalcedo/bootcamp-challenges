import React, { useState } from "react";
import { Elecciones } from "../pages/Elecciones";
import { CandidatosContext } from "./../utils/CandidatosContext";

export const VotosApp = () => {
  const [candidatos, setCandidatos] = useState([
    { nombre: "Hugo", votos: 0 },
    { nombre: "Paco", votos: 0 },
    { nombre: "Luis", votos: 0 },
  ]);

  return (
    <div>
      <h1>votos-app-context</h1>
      <hr />
      <CandidatosContext.Provider value={{ candidatos, setCandidatos }}>
        <Elecciones />
      </CandidatosContext.Provider>
    </div>
  );
};
