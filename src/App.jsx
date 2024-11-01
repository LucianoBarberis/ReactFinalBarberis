import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Checkout from "./components/Checkout/Checkout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import Cart from "./components/Cart/Cart"
import './App.css'

function App() {

  return (
    <div className="app-container" >
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenidos a LunaMarket!" />} />
            <Route path="/category/:idCategory" element={<ItemListContainer greeting="Bienvenidos" />} />
            <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
