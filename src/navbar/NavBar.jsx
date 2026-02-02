import CartWidget from "../cartwidget/cartwidget"
import "./navbar.css"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
      <header>
        <Link to="/">
          <img src="/src/assets/logo.png" alt="Logo de la marca" className="logo" />
        </Link>

        <h1>Nx Perfumerie</h1>
        <nav>
          <ul>
            <li className="navbar"><Link to="/">Home</Link></li>
            <li className="navbar"><Link to="/categoria/Masculino">Fragancias Masculinas</Link></li>
            <li className="navbar"><Link to="/categoria/Femenino">Fragancias Femeninas</Link></li>
            <li className="navbar"><Link to="/categoria/Unisex">Fragancias Unisex</Link></li>
          </ul>
        </nav>

        <CartWidget />
      </header>
    </>
  )
}

export default NavBar
