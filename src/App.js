import "./App.css";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import ItemListContainer from "./containers/ItemListContainer"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContext";

const App = () => {
  return (
    <CartContextProvider >
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} /> 
          <Route path="/cart" element={<Cart />} /> 
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
    
  )
}

export default App;