import "./scss/toggleMode.scss";
import { useRef } from "react";

export const ToggleMode = ({ active, handler }) => {
  const checkID = useRef();
  const { random, floor } = Math;
  const ramStr = floor(random() * 100) + 0;
  checkID.current = `mode${String(ramStr)}`;

  return (
    <div className="toggle-mode">
      <input
        type="checkbox"
        id={checkID.current}
        defaultChecked={active}
        onChange={handler}
      />
      <label htmlFor={checkID.current} />
      <span />
    </div>
  );
};
