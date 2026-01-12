
import "./itemListContainer.css"
import Contenedor from '../contenedor/Contenedor'

const ItemListContainer = () => {

  const bienvenida = "Bienvenido a mi pagina web de perfumeria"

  return (
    <>
    <Contenedor mensaje={bienvenida}/>
    </>
  )
}

export default ItemListContainer