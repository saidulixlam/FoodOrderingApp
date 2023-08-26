import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [items, updatedItems] = useState([]);

    //adding new item to the cart
    const addItemHandler = (item) => {
        updatedItems([...items, item]);
        items.forEach(ite => {
            if (ite.id === item.id) {
                ite.quantity++;
                updatedItems(items)
            }
        })
    }

    const removeItemHandler = (id) => {
        items.forEach(ite => {
            if (ite.id === id) {
                ite.quantity--;
                updatedItems(items)
            }
        })
        console.log(id);
    }
    const cartContext = {
        items: items,
        totalAmount: 0,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;