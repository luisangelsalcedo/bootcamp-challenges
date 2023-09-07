import { Link } from "react-router-dom"
import config from "../config"

const Error404 = () => (
  <div className="error404">
    <nav className="mainMenu" aria-labelledby="navigator">
      <div className="container">
        <div className="logo">
          <Link to={config.base}>
            <img src="https://fakestoreapi.com/icons/logo.png" alt="" />
            <div>Fake Store</div>
          </Link>
        </div>
      </div>
    </nav>
    <div className="title">
      <small>Error</small> 404
    </div>
    <div className="center">
      No hemos encontrado la página que estas buscando.
    </div>
    <Link to="/">
      <div className="btn">Volver al home</div>
    </Link>
  </div>
)

export default Error404
