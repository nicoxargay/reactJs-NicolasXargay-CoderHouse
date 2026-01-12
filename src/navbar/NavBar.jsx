
import CartWidget from '../cartwidget/cartwidget'
import "./navbar.css"

const NavBar = () => {
  return (
    <>
    <header>
    <img src="/src/assets/logo.png" alt="Logo de la marca"  className='logo'/>
    <h1>Nx Perfumerie</h1>
    <nav>
    <ul>
      <li ><a href="home.jsx" className='navbar'>Home</a></li>
      <li ><a href="catalogo.jsx" className='navbar'>Catalogo</a></li>
      <li ><a href="envio.jsx" className='navbar'>Envio</a></li>
      <li ><a href="contacto.jsx" className='navbar'>Contacto</a></li>
    </ul>
    </nav>

    <CartWidget/>
    </header>
    </>    
  )
}

export default NavBar