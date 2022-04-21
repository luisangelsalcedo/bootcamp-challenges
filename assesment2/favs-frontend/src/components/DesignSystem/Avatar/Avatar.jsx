import "./scss/avatar.scss";

/**
 * ## Avatar component
 * * Component to display user image
 * **Use:**
 * ```
 * <Avatar name={String} img={String} handler={Function} />
 * ```
 * @param {object} props
 * @returns {jsx} JSX
 */
export const Avatar = ({ name, img, handler }) => (
  <button type="button" className="avatar btn" onClick={handler}>
    <span>{name}</span>
    <div className="img">{img ? <img src={img} alt="" /> : [...name][0]}</div>
  </button>
);
