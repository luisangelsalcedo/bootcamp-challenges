import "./scss/avatar.scss";

export const Avatar = ({ name, img }) => (
  <div className="avatar">
    <span>{name}</span>
    <div className="img">{img ? <img src={img} alt="" /> : [...name][0]}</div>
  </div>
);
