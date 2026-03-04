import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div className="cartItemCard">
      <div className="cartItemInfo">
        <h4 className="cartItemNombre">{item.nombre}</h4>
        <p className="cartItemDetalle">Cantidad: {cantidad} · ${item.precio} c/u</p>
      </div>
      <span className="cartItemPrecio">${item.precio * cantidad}</span>
      <button className="cartItemEliminar" onClick={() => eliminarProducto(item.id)}>
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;