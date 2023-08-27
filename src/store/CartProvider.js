import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [items, updatedItems] = useState([]);

    const addItemHandler = (item) => {
        // Create a copy of the current items array
        const updatedItemsArray = [...items];

        // Check if an item with the same ID already exists
        const existingItemIndex = updatedItemsArray.findIndex((existingItem) => existingItem.id === item.id);

        if (existingItemIndex !== -1) {
            // If the item with the same ID exists, update its quantity
            updatedItemsArray[existingItemIndex].quantity += Number(item.quantity);
        } else {
            // If the item with the same ID doesn't exist, add it to the array
            updatedItemsArray.push(item);
        }

        // Update the state with the new items array
        updatedItems(updatedItemsArray);
    }

    const removeItemHandler = (id) => {
        // Create a copy of the current items array
        const updatedItemsArray = [...items];

        // Find the index of the item with the specified id
        const itemIndex = updatedItemsArray.findIndex((item) => item.id === id);

        if (itemIndex !== -1) {
            // Create a copy of the item to avoid modifying the original item
            const updatedItem = { ...updatedItemsArray[itemIndex] };

            // Decrement the quantity of the item by 1
            updatedItem.quantity = updatedItem.quantity - 1;

            // Update the item in the array with the updated item
            updatedItemsArray[itemIndex] = updatedItem;

            // Update the state with the new items array
            updatedItems(updatedItemsArray);
        }
    };

    const cartContext = {
        items: items,
        totalAmount: 0,
        alreadyHas: false,
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