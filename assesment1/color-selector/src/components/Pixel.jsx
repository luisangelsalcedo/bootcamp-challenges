const Pixel = ({ color, newColor, id, changePixeles }) => {
  // const [colorPixel , setcolorPixel] = useState(color);
  const setPixel = () => {
    // setcolorPixel(newColor);
    if (changePixeles) changePixeles(id, newColor)
  }

  return (
    <div
      id={id}
      className="pixel"
      onClick={setPixel}
      onKeyDown={setPixel}
      style={{ backgroundColor: color }}
      role="button"
      tabIndex={0}
      aria-label="pixel"
    />
  )
}

export default Pixel
