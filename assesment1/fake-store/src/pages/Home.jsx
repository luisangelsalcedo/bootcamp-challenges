import { useState, useEffect } from "react"
import Menu from "../components/Menu"
import ProductCard from "../components/ProductCard"
import getProductsApi from "../helpers/getProductsApi"

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProductsApi().then((productsList) => {
      setProducts(productsList.data)
      // console.log("productos cargados")
    })
  }, [])

  // console.log(products)
  return (
    <div className="home">
      <Menu />

      <div className="container">
        <div className="title">
          <h2>Home</h2>
          Products ({products.length})
        </div>
        <div className="categorias">{}</div>
        <div className="products">
          {products.map(({ id, title, image, rating }) => (
            <ProductCard
              key={id}
              id={id}
              title={title}
              image={image}
              rate={rating.rate}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
