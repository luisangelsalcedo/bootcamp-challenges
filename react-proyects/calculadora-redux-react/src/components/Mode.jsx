import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../redux/actions";

export const Mode = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector(state => state.ui);

  return (
    <div className="checkMode">
      Dark mode
      <div className="mode">
        <label htmlFor="mode"></label>
        <input
          type="checkbox"
          id="mode"
          onChange={() => dispatch(setMode(darkMode))}
        />
      </div>
    </div>
  );
};
