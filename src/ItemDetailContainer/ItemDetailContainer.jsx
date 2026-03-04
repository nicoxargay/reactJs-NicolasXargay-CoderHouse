import React, { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { db } from "../service/config"
import { getDoc, doc } from "firebase/firestore"


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null)
  const { idItem } = useParams()

useEffect(() => {
  const nuevoDoc = doc(db, "productos", idItem )

  getDoc(nuevoDoc)
  .then(res=>{
    const data = res.data()
    const nuevoProducto = {id: res.id, ...data}
    setProducto(nuevoProducto)
  })
  .catch(error=> console.log(error))
}, [idItem])

  // useEffect(() => {
  //   if (!idItem) return

  //   getUnProducto(Number(idItem)).then((respuesta) => setProducto(respuesta))
  // }, [idItem])

  // if (!producto) return <p>Cargando...</p>

  return (
    <>
      <ItemDetail {...producto} />
    </>
  )
}

export default ItemDetailContainer
