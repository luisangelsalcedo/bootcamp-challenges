import { Link } from "react-router-dom"

const Menu = () => (
  <div className="mainMenu">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </div>
)

export default Menu
