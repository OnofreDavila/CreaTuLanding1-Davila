import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error } from "./components/Error";
import { CartProvider } from "./context/CartContext";
import { CartContainer } from "./components/CartContainer";
import { Checkout } from "./components/Checkout";
import "./App.css";

function App() {
  const mensaje = "Bienvenidos a Proyect Conspiracy Clothing";
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer mensaje={mensaje} />} />
          <Route path="/category/:type" element={<ItemListContainer mensaje="Estas en la categoria: " />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />

          <Route path="/cart" element={<CartContainer />} />

          <Route path="/checkout" element={<Checkout />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
