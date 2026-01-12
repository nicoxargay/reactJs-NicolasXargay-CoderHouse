
import "./cartwidget.css"

const CartWidget = () => {

  const imgCarrito = "/src/assets/carrito.png"
  
  return (
    <>
    <a href="carrito.jsx">
    <img src={imgCarrito} alt="carrito de compras"  className='carrito'/>
    </a>
    </>
    
  )
}

export default CartWidget