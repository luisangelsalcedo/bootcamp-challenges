import React from "react";
import { useDispatch } from "react-redux";
import { setDarkMode } from "../redux/actions";

export const Mode = () => {
  const dispatch = useDispatch();
  return (
    <div className="checkMode">
      Dark mode
      <div className="mode">
        <label htmlFor="mode"></label>
        <input
          type="checkbox"
          id="mode"
          onChange={() => dispatch(setDarkMode())}
        />
      </div>
    </div>
  );
};
