import utils from "../helpers/utils"
import Star from "./Star"
// import prodDefault from "../image/product-default.png"
import Timer from "./Timer"

const ProductCard = ({ id, title, image, rate }) => {
  const timeRandom = Math.round(Math.random() * 3)

  return (
    <div className="product_card">
      <figure>
        <img src={image} alt={title} />
      </figure>

      <h3>{utils.characterCut(title, 50)}</h3>

      <Star rate={rate} />
      <Timer timeRandom={`00:0${timeRandom}:10`} id={id} />
    </div>
  )
}
export default ProductCard
