import { useState } from "react"
import draws from "../helpers/draws"
import colorsList from "../helpers/colors"
import Color from "./Color"
import Pixel from "./Pixel"

import "./_Lienzo.scss"
import message from "../helpers/menssage"

const Lienzo = () => {
  const colorInit = "white"
  const defaultPixeles = new Array(400).fill(colorInit, 0)

  const [pixeles, setPixeles] = useState(defaultPixeles)
  const [newColor, setNewColor] = useState(colorInit)
  const [paintPixeles, setPaintPixeles] = useState(draws[0].arr) // mario
  const [start, setStart] = useState(false)

  const changeColor = (currentColor) => {
    setNewColor(currentColor)
  }

  // funcion para actualizar el estado del array 'pixeles' y cambiar sus colores
  const changePixeles = (index, setColor) => {
    pixeles[index] = setColor
    setPixeles([...pixeles])

    if ([...pixeles].join() !== defaultPixeles.join()) setStart(true)
    else setStart(false)
    // console.log(pixeles);
  }

  const reset = () => {
    if (window.confirm(message.confirm)) {
      setPixeles([...defaultPixeles])
      setStart(false)
    }
  }

  const compare = () => {
    if (pixeles.join() === paintPixeles.join()) alert(message.success)
    else alert(message.error)
  }

  const drawReplace = (draw) => {
    for (const objDraw of draws) {
      if (objDraw.draw === draw) setPaintPixeles(objDraw.arr)
    }
  }

  return (
    <div>
      <div className="Colors">
        <div>
          <h4>Select a color and click on any cell of the grid</h4>

          {colorsList.map((color) => (
            <Color
              color={color}
              key={color.toLocaleLowerCase()}
              changeColor={changeColor}
              isActive={newColor === color}
            />
          ))}
          {start ? (
            <div
              className="btn reset"
              onClick={reset}
              onKeyDown={reset}
              role="button"
              tabIndex={0}
            >
              Reset
            </div>
          ) : null}
          {start ? (
            <div
              className="btn compare"
              onClick={compare}
              onKeyDown={compare}
              role="button"
              tabIndex={-1}
            >
              Compare
            </div>
          ) : null}
        </div>
      </div>
      <div className="Lienzo">
        <div className="muestra">
          {paintPixeles.map((pixel, i) => (
            <Pixel key={String(i)} id={i} color={pixel} />
          ))}
          <select onChange={(e) => drawReplace(e.target.value)}>
            {draws.map(({ draw, arr }) => (
              <option value={draw} key={draw} data={arr}>
                {draw}
              </option>
            ))}
          </select>
        </div>

        <div className="pixeles">
          {pixeles.map((pixel, i) => (
            <Pixel
              key={String(i)}
              id={i}
              color={pixel}
              newColor={newColor}
              changePixeles={changePixeles}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Lienzo
