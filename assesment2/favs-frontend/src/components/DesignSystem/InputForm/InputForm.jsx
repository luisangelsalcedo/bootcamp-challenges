import React from "react";
import "./scss/inputForm.scss";

export const InputForm = React.forwardRef((props, ref) => {
  const { fa } = props;

  return (
    <div className="input-form">
      {fa && <i className={`fa fa-${fa}`} aria-hidden="true" />}
      <input ref={ref} {...props} />
    </div>
  );
});
