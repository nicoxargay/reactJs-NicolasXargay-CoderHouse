import { useState } from "react"
import CartWidget from "../cartwidget/CartWidget"
import "./navbar.css"
import { Link } from "react-router-dom"

const NavBar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <>
      <header>
        <Link to="/">
          <img src="/assets/logo.png" alt="Logo de la marca" className="logo" />
        </Link>

        <h1>Nx Perfumerie</h1>

        <nav className={menuAbierto ? "abierto" : ""}>
          <ul>
            <li className="navbar"><Link to="/" onClick={() => setMenuAbierto(false)}>Home</Link></li>
            <li className="navbar"><Link to="/categoria/Masculino" onClick={() => setMenuAbierto(false)}>Fragancias Masculinas</Link></li>
            <li className="navbar"><Link to="/categoria/Femenino" onClick={() => setMenuAbierto(false)}>Fragancias Femeninas</Link></li>
            <li className="navbar"><Link to="/categoria/Unisex" onClick={() => setMenuAbierto(false)}>Fragancias Unisex</Link></li>
          </ul>
        </nav>

        <div className="navAcciones">
          <CartWidget />
          <button
            className={`hamburguesa ${menuAbierto ? "abierto" : ""}`}
            onClick={() => setMenuAbierto(!menuAbierto)}
            aria-label="Abrir menú"
          >
            <span /><span /><span />
          </button>
        </div>

      </header>
    </>
  )
}

export default NavBar