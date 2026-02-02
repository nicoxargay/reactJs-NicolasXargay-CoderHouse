import { useState } from "react"
import "./itemCount.css"

const ItemCount = ({stock, inicial, funcionAgregar}) => {

    const [contador, setContador] = useState(inicial)

    const incrementar = () => {
        if(contador < stock){
            setContador (contador + 1)
        }
    }

    const decrementar = () => {
        if(contador > inicial) {
            setContador(contador - 1)
        }
    }


  return (
    <div className="countCard">
      <div className="countControls">
        <button className="countBtn" onClick={decrementar}>-</button>
        <span className="countNumber">{contador}</span>
        <button className="countBtn" onClick={incrementar}>+</button>
      </div>
      <button onClick={() => funcionAgregar(contador)} className="detalleBoton">
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount
