import "./scss/inputForm.scss";

export const InputForm = ({ placeholder, ref, fa, handler }) => (
  <div className="input-form">
    {fa && <i className={`fa fa-${fa}`} aria-hidden="true" />}
    <input type="text" ref={ref} placeholder={placeholder} onChange={handler} />
  </div>
);
