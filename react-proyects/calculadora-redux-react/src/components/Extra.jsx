import React from "react";
import { ReactComponent as DeleteIcon } from "../assets/img/icon-delete.svg";
import { useDispatch, useSelector } from "react-redux";

import { deleteNumber } from "../redux/actions";
import { cleanResult } from "./../redux/actions/index";

export const Extra = () => {
  const dispatch = useDispatch();
  const { result } = useSelector(state => state.calculator);

  return (
    <div className="buttons_extra">
      <button onClick={() => dispatch(cleanResult(result))}>C</button>
      <button
        onClick={() => dispatch(deleteNumber(result))}
        className="btn_delete"
      >
        <DeleteIcon />
      </button>
    </div>
  );
};
