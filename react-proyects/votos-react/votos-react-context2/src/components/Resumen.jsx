import React from "react";
import { Total } from "./Total";
import { Escrutinio } from "./Escrutinio";
import { Porcentaje } from "./Porcentaje";

export const Resumen = () => {
  return (
    <>
      <Total />
      <Escrutinio />
      <Porcentaje />
    </>
  );
};
