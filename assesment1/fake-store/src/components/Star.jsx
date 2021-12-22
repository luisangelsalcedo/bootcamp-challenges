const Star = ({ rate }) => {
  const [one, part] = String(rate).split(".")

  const arr = new Array(5)
    .fill(0, 0)
    .fill(1, 0, Number(one))
    .fill(2, Number(one), Number(one) + Math.round(Number(part ?? 0) / 10))

  // (0) vacio
  // (1) completo
  // (2) medio

  return (
    <div className="rate">
      <div className="rate_num">{rate}</div>
      <div className="rate_stars">
        {arr.map((star, i) => {
          let classStar = "fa fa-star"
          if (star === 0) classStar += "-o"
          if (star === 2) classStar += "-half-o"

          return (
            <i key={Number(i)} className={classStar}>
              &nbsp;
            </i>
          )
        })}
      </div>
    </div>
  )
}
//

export default Star
