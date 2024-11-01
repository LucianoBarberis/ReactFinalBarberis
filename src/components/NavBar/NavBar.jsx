import CartWidget from "./CartWidget"
import { BsBox } from "react-icons/bs";
import { Link } from "react-router-dom"

import "./navbar.css"

const NavBar = () => {

  return (
    <nav className="navbar">

      <Link to="/" className="brand primary-font-color">
        <p className="title-brand ">LunaMarket</p>
        <i className="fa-solid fa-moon"></i>
      </Link>

      <ul className="categories">
        <li className="category">
          <Link to="/category/interiores" className="text-link">Interiores</Link>
        </li>
        <li className="category">
          <Link to="/category/exteriores" className="text-link" >Exteriores</Link>
        </li>
        <li className="category">
          <Link to="/category/electrodomesticos" className="text-link">Electrodomesticos</Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  )
}
export default NavBar