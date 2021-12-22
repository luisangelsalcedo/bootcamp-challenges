import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import getProductsApi from "../helpers/getProductsApi"
import Menu from "../components/Menu"
import Star from "../components/Star"

const Product = () => {
  const [rate, setRate] = useState(0)
  const [priceAll, setPriceAll] = useState("")
  const [thisProduct, setThisProduct] = useState({})
  const prop = useParams()
  useEffect(() => {
    getProductsApi(prop.id).then((product) => {
      setThisProduct(product.data)
      const { price, rating } = product.data
      setRate(rating.rate)
      setPriceAll(
        String(price).indexOf(".") === -1 ? `$ ${price}.00` : `$ ${price}`
      )
    })
  }, [])
  const { title, description, category, image } = thisProduct

  const addShoppingCart = () => {
    alert(`✅ Agregar 🛍️ producto {id:${prop.id}} al carrito 🛒`)
  }

  return (
    <div className="product">
      <Menu />

      <div className="container">
        <div className="product_image">
          <div>
            <figure>
              <img src={image} alt="" />
            </figure>
            <div className="product_rate">
              <Star rate={rate} />
            </div>
          </div>
        </div>
        <div className="product_info">
          <div className="title">
            <div className="productCategory">{category}</div>
            <h2>{title}</h2>
            <div className="product_price">{priceAll}</div>
          </div>

          <div className="product_description">{description}</div>
          <div
            className="btn"
            onClick={addShoppingCart}
            onKeyDown={addShoppingCart}
            role="button"
            tabIndex={0}
          >
            <i className="fa fa-cart-plus">&nbsp;</i>Agregar al carrito
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
