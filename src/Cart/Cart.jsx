import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./cart.css";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <div className="cartContainer">
        <div className="cartVacio">
          <div className="cartVacioIcono">🛒</div>
          <p className="cartVacioTexto">Tu carrito está vacío</p>
          <Link to="/" className="cartVacioSub">Ver productos</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cartContainer">
      <h2 className="cartTitulo">Mi Carrito</h2>
      <p className="cartSubtitulo">{cantidadTotal} {cantidadTotal === 1 ? "producto" : "productos"}</p>

      <div className="cartLista">
        {carrito.map((producto) => (
          <CartItem key={producto.item.id} {...producto} />
        ))}
      </div>

      <div className="cartSeparador" />

      <div className="cartResumen">
        <div className="cartTotalRow">
          <span className="cartTotalLabel">Total</span>
          <span className="cartTotalValor">${total}</span>
        </div>
        <div className="cartBotones">
          <button className="btnVaciar" onClick={vaciarCarrito}>Vaciar carrito</button>
          <Link to="/checkout" className="btnFinalizar">Finalizar compra</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;