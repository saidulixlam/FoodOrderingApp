import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
 const [showCart,setShowcart]= useState(false);

 function showCartHandler() {
    setShowcart(true);
 }

 function closeCartHandler() {
    setShowcart(false);
 }
  return (
    <Fragment>
     {showCart &&  <Cart onClose={closeCartHandler}/>}
      <Header onShow={showCartHandler}/>
      <Meals/>
    </Fragment>
  );
}

export default App;
