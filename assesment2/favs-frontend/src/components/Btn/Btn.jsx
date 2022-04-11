import { useEffect, useRef } from "react";
import "./scss/btn.scss";

export const Btn = ({ label, fa, type, block, handler }) => {
  const buttonRef = useRef();

  useEffect(() => {
    buttonRef.current.classList.add("btn");
    if (type) buttonRef.current.classList.add(`btn-${type}`);
    if (fa) buttonRef.current.classList.add("btn-icon");
    if (block) buttonRef.current.classList.add("btn-block");
  }, []);

  return (
    <button ref={buttonRef} type="button" onClick={handler}>
      {fa && <i className={`fa fa-${fa}`} aria-hidden="true" />}
      {label && <span>{label}</span>}
    </button>
  );
};
