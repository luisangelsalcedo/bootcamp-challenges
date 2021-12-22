import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import getRemainTime from "../helpers/getRemainTime"

const Timer = ({ timeRandom, id }) => {
  const [time, setTimer] = useState(timeRandom)
  const [btnActive, setBtnActive] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((oldTime) => {
        const newTime = getRemainTime(oldTime)
        if (newTime === "00:00:00") {
          clearInterval(interval)
          setBtnActive(false)
        }
        return newTime
      })
    }, 1000)
  }, [])

  return (
    <>
      <div className="timer">
        <i className="fa fa-clock-o" />
        {time}
      </div>

      {btnActive ? (
        <Link to={`/product-detail/${id}`}>
          <div className="btn">Ver producto</div>
        </Link>
      ) : (
        <div className="btn disable">Tiempo caducado</div>
      )}
    </>
  )
}
export default Timer
