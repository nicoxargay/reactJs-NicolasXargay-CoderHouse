
import "./cartwidget.css"
import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"
import { Link } from "react-router-dom"


const CartWidget = () => {

  const {cantidadTotal} = useContext(CarritoContext)

  const imgCarrito = "/public/assets/carrito.png"
  
  return (
    <>
    <Link to="/cart">
    <strong className="carrito">🛒</strong>
    </Link>
    </>
    
  )
}

export default CartWidget