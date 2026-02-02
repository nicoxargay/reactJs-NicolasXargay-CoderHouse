
import "./itemListContainer.css"
import { useState, useEffect } from "react"
import { getProductos, getProductosCategoria } from "../asyncmock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  const {idCategoria} = useParams()

  useEffect(()=>{

    const funcionProductos = idCategoria ? getProductosCategoria : getProductos

    funcionProductos(idCategoria)
    .then(res=> setProductos(res))
  },[idCategoria]) 
  return (
    <>
    <h2>Catalogo</h2>
    <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer