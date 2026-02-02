import "../Item/item.css"
import { Link } from "react-router-dom"

const Item = ({id, nombre, precio, categoria, imagen}) => {
  return (
    <>
    <div className="cardProductos">
    <img src={imagen} alt={nombre} />
    <h3>{nombre}</h3>
    <h3>${precio}</h3>
    <h3>{categoria}</h3>
    <Link to={`/Item/${id}`}>
    <button>Ver detalles</button>
    </Link>
    </div>
    </>
  )
}

export default Item
