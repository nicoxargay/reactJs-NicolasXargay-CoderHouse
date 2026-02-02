import React, { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getUnProducto } from "../asyncmock"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null)
  const { idItem } = useParams()

  useEffect(() => {
    if (!idItem) return

    getUnProducto(Number(idItem)).then((respuesta) => setProducto(respuesta))
  }, [idItem])

  if (!producto) return <p>Cargando...</p>

  return (
    <>
      <ItemDetail {...producto} />
    </>
  )
}

export default ItemDetailContainer
