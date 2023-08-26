import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import classe from '../Meals/MealItem.module.css';
const Cart = (item) => {
    const ctx = useContext(CartContext);

    const hasItem=ctx.items.length>0;
    let totalAmount = 0;
    ctx.items.forEach(element => {
        totalAmount += element.price * element.quantity;
       
    });
    const cartItems = <ul className={classes['cart-items']}>
        {
            ctx.items.map((item) => (
                <li className={classe.meal}>
                    {item.quantity > 0 && <div>
                        <h3>{item.name}</h3>
                        <div className={classe.price}>
                            <span>{item.price}.00 Rs. </span>
                            
                        </div>
                        <div>
                           <span>x{item.quantity}</span>
                        </div>
                    </div>}
                    {item.quantity>0 && 
                        <div className={classes.newactions}>
                        <button onClick={()=>ctx.addItem(item)}>+</button>
                        <button onClick={()=>ctx.removeItem(item.id)} className={classes.button}>-</button>
                    </div>
                    }
                </li>
            ))
        }
    </ul>
    return (
        <Modal onClose={item.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={item.onClose}>Close</button>
                {hasItem && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
}

export default Cart;