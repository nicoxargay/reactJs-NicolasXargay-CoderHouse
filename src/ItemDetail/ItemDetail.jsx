import React from "react"
import "./itemDetail.css"
import ItemCount from "../itemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"

const ItemDetail = ({ nombre, precio, categoria, imagen, stock }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0)

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad)
    console.log("productos agregados:" + cantidad )
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eos
            veniam, provident consequuntur sequi vel, earum reprehenderit eum ipsa
            ex nam. Porro, rem. Iure ipsum, repudiandae maiores quis illo aspernatur?
          </p>
          

          {
            agregarCantidad > 0 ? (<Link to="cart"></Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
          }
        </div>
      </div>
    </>
  )
}

export default ItemDetail
