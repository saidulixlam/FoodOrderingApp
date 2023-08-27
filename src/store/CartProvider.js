import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [items, updatedItems] = useState([]);

    const addItemHandler = (item) => {
       
        updatedItems([...items, item]);
        items.forEach(ite => {
            if (ite.id === item.id) {
                ite.quantity=Number(ite.quantity);
                item.quantity=Number(item.quantity);
                ite.quantity+=(item.quantity);
                updatedItems(items);
            }
        })
    }

    const removeItemHandler = (id) => {
        items.forEach(ite => {
            if (ite.id === id) {
                ite.quantity=Number(ite.quantity);
                
                ite.quantity=ite.quantity-1;
                updatedItems(items)
            }
        })
    }
    const cartContext = {

        items: items,
        totalAmount: 0,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {console.log(cartContext)}
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;