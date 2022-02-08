import React from "react";
import { Preview } from "./Preview";
import { Result } from "./Result";
import { Numbers } from "./Numbers";
import { Operations } from "./Operations";
import { Extra } from "./Extra";

export const Calculator = () => {
  return (
    <div className="calculator">
      <div className="box">
        <Preview />
        <Result />
        <div className="buttons">
          <Extra />
          <div className="box">
            <Numbers />
            <Operations />
          </div>
        </div>
      </div>
    </div>
  );
};
