import React from "react"
import "./itemDetail.css"
import ItemCount from "../itemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"
import { CarritoContext } from "../context/CarritoContext"
import { useContext } from "react"

const ItemDetail = ({ id, nombre, precio, categoria, imagen, stock }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0)

  const {agregarAlCarrito} = useContext(CarritoContext)

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad)
    console.log("productos agregados:" + cantidad )

    const item= { id, nombre, precio}
    agregarAlCarrito(item, cantidad)
  }

  return (
    <>
      <div className="detalleProducto">
        <img src={imagen} alt={nombre} />

        <div className="detalleInfo">
          <h2>{nombre}</h2>
          <p className="precio">${precio}</p>
          <p className="categoria">{categoria}</p>
          <p>
            Un perfume {categoria} que despierta los sentidos y transforma cada momento en una experiencia única. Sus notas cuidadosamente seleccionadas crean una fragancia persistente y elegante, perfecta para quienes buscan dejar una huella inolvidable. Dejate llevar por su aroma y descubrí por qué se convierte en parte de tu identidad.
          </p>
          

          {
            agregarCantidad > 0 ? (<Link to="/Cart" className="linkCarrito">Ver carrito 🛒</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
          }
        </div>
      </div>
    </>
  )
}

export default ItemDetail
