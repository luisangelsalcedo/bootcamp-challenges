import { createContext, useState } from "react";
export const CandidatosContext = createContext();

export const CandidatosProvider = ({ children }) => {
  ///////////////////////////////////////////////////
  const [candidatos, setCandidatos] = useState([
    { nombre: "Hugo", votos: 0 },
    { nombre: "Paco", votos: 0 },
    { nombre: "Luis", votos: 0 },
  ]);
  ///////////////////////////////////////////////////
  const votar = ({ nombre, votos }) => {
    setCandidatos(
      candidatos.map(candidato => {
        return candidato.nombre === nombre
          ? { ...candidato, votos: votos + 1 }
          : candidato;
      })
    );
  };
  ///////////////////////////////////////////////////
  const nuevoCandidato = newCandidato => {
    setCandidatos(oldCandidatos => [
      ...oldCandidatos,
      {
        nombre: `${newCandidato.nombre} ${newCandidato.apellido ?? ""}`,
        votos: 0,
      },
    ]);
    console.log(candidatos);
  };
  ///////////////////////////////////////////////////
  return (
    <CandidatosContext.Provider value={{ candidatos, votar, nuevoCandidato }}>
      {children}
    </CandidatosContext.Provider>
  );
};
