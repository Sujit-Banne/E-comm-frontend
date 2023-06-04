import React from 'react';
import style from './cartItem.module.css'

const CartItem = ({ item, onRemove, onIncrement, onDecrement }) => {
    return (
        <div className={style.cartItem}>
            <img className={style.cartImage} src={item.image} alt="product" />
            <div className={style.cartDetails}>
                <h2>{item.name}</h2>
                <p>Price: RS. {item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => onRemove(item.productId)}>Remove From Cart</button><br />
                <button onClick={() => onDecrement(item.productId)}>-</button>
                <button onClick={() => onIncrement(item.productId)}>+</button>
            </div>
        </div>
    );
};

export default CartItem;
