import {useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
 const [showCart,setShowcart]= useState(false);

 function showCartHandler() {
    setShowcart(true);
 }

 function closeCartHandler() {
    setShowcart(false);
 }
  return (
    <CartProvider>
     {showCart &&  <Cart onClose={closeCartHandler}/>}
      <Header onShow={showCartHandler}/>
      <Meals/>
    </CartProvider>
  );
}

export default App;
