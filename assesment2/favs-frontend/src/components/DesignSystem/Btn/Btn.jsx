import React, { useEffect, useRef } from "react";
import "./scss/btn.scss";

export const Btn = React.forwardRef((props, ref) => {
  const { label, fa, btn } = props;
  const buttonRef = !ref ? useRef() : ref;

  useEffect(() => {
    buttonRef.current.classList.add("btn");
    if (btn) buttonRef.current.classList.add(`btn-${btn}`);
    if (fa) buttonRef.current.classList.add("btn-icon");
  }, []);

  return (
    <button ref={buttonRef} type="button" {...props}>
      {fa && <i className={`fa fa-${fa}`} aria-hidden="true" />}
      {label && <span>{label}</span>}
    </button>
  );
});
