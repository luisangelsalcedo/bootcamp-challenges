import { Link } from "react-router-dom"

const Menu = () => (
  <nav className="mainMenu" aria-labelledby="navigator">
    <div className="container">
      <div className="logo">
        <Link to="/">
          <img src="https://fakestoreapi.com/icons/logo.png" alt="" />
          <div>Fake Store</div>
        </Link>
      </div>
      <ul aria-labelledby="menubar">
        <li aria-labelledby="menuitem" data-page="home">
          <Link to="/">Home</Link>
        </li>
        <li aria-labelledby="menuitem" data-page="about">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Menu
