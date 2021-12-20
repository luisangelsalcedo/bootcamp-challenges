const Color = ({ color, changeColor, isActive }) => {
  const classActive = isActive ? "color-item active" : "color-item"

  return (
    <div
      className={classActive}
      style={{ background: color }}
      onClick={() => changeColor(color)}
      onKeyDown={() => changeColor(color)}
      role="button"
      tabIndex={0}
      aria-label={color}
    />
  )
}
export default Color
