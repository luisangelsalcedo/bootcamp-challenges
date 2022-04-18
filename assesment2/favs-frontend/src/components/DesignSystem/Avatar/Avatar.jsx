import "./scss/avatar.scss";

export const Avatar = ({ name, img, handler }) => (
  <button type="button" className="avatar btn" onClick={handler}>
    <span>{name}</span>
    <div className="img">{img ? <img src={img} alt="" /> : [...name][0]}</div>
  </button>
);
