import "./App.css";
import NavBar from "./navbar/NavBar";
import ItemListContainer from "./itemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CarritoProvider } from "./context/CarritoContext";
import Cart from "./Cart/Cart";
import Chekcout from "./Checkout/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:idCategoria"element={<ItemListContainer />}/>
            <Route path="/Item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Chekcout/>}/>
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
