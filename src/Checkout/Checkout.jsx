import { useContext, useState } from "react"
import { CarritoContext } from "../context/CarritoContext"
import { db } from "../service/config"
import { collection, addDoc } from "firebase/firestore"
import "./checkout.css"

const Checkout = () => {
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [telefono, setTelefono] = useState("")
  const [email, setEmail] = useState("")
  const [emailConfirmacion, setEmailConfirmacion] = useState("")
  const [error, setError] = useState("")
  const [ordenId, setOrdenId] = useState("")

  const { carrito, vaciarCarrito, total } = useContext(CarritoContext)

  const manejadorFormulario = (event) => {
    event.preventDefault()
    setError("")

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor, completá todos los campos")
      return
    }
    if (email !== emailConfirmacion) {
      setError("Los emails no coinciden")
      return
    }

    const orden = {
      item: carrito.map(producto => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total,
      fecha: new Date(),
      nombre, apellido, telefono, email,
    }

    addDoc(collection(db, "ordenes"), orden)
      .then(docRef => {
        setOrdenId(docRef.id)
        vaciarCarrito()
      })
      .catch(() => setError("Se produjo un error al crear la orden"))
  }

  if (ordenId) {
    return (
      <div className="checkoutWrapper">
        <div className="checkoutCard">
          <div className="checkoutHeader">
            <h2 className="checkoutTitulo">¡Gracias por tu compra!</h2>
            <p className="checkoutSubtitulo">Nx Perfumerie</p>
          </div>
          <div className="checkoutExito">
            <div className="checkoutExitoIcono">✨</div>
            <p className="checkoutExitoTexto">Tu orden fue confirmada</p>
            <p className="checkoutExitoOrden">
              Número de orden: <span>{ordenId}</span>
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="checkoutWrapper">
      <div className="checkoutCard">

        {/* Header */}
        <div className="checkoutHeader">
          <h2 className="checkoutTitulo">Finalizar Compra</h2>
          <p className="checkoutSubtitulo">Nx Perfumerie</p>
        </div>

        <div className="checkoutResumen">
          <p className="checkoutResumenTitulo">Tu pedido</p>
          {carrito.map(producto => (
            <div key={producto.item.id} className="checkoutProducto">
              <span>
                <span className="checkoutProductoNombre">{producto.item.nombre}</span>
                <span className="checkoutProductoCantidad">x{producto.cantidad}</span>
              </span>
              <span className="checkoutProductoPrecio">${producto.item.precio * producto.cantidad}</span>
            </div>
          ))}
          <div className="checkoutTotalRow">
            <span className="checkoutTotalLabel">Total</span>
            <span className="checkoutTotalValor">${total}</span>
          </div>
        </div>

        <div className="checkoutSeparador" />

        <form className="checkoutFormulario" onSubmit={manejadorFormulario}>
          <p className="checkoutFormTitulo">Tus datos</p>

          <div className="checkoutFila">
            <div className="checkoutCampo">
              <label>Nombre</label>
              <input type="text" placeholder="Juan" onChange={e => setNombre(e.target.value)} />
            </div>
            <div className="checkoutCampo">
              <label>Apellido</label>
              <input type="text" placeholder="García" onChange={e => setApellido(e.target.value)} />
            </div>
          </div>

          <div className="checkoutCampo">
            <label>Teléfono</label>
            <input type="number" placeholder="11 1234 5678" onChange={e => setTelefono(e.target.value)} />
          </div>

          <div className="checkoutCampo">
            <label>Email</label>
            <input type="email" placeholder="juan@email.com" onChange={e => setEmail(e.target.value)} />
          </div>

          <div className="checkoutCampo">
            <label>Confirmar email</label>
            <input type="email" placeholder="juan@email.com" onChange={e => setEmailConfirmacion(e.target.value)} />
          </div>

          {error && <p className="checkoutError">{error}</p>}

          <button type="submit" className="btnConfirmar">Confirmar compra</button>
        </form>

      </div>
    </div>
  )
}

export default Checkout