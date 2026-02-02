
import './App.css'
import NavBar from './navbar/NavBar'
import ItemListContainer from './itemListContainer/ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
      <Route path='/Item/:idItem' element={<ItemDetailContainer/>}/>
    </Routes>
    
    
    </BrowserRouter>
    
    </>
  )
}

export default App
