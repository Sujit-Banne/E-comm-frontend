import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import styles from './Cart.module.css';

const Cart = ({ cartItems, setCartItems }) => {
    const [paymentComplete, setPaymentComplete] = useState(false);
    const navigate = useNavigate();

    const handleRemoveItem = (productId) => {
        setCartItems((prevCartItems) => prevCartItems.filter((item) => item.productId !== productId));
    };

    const handleIncrement = (productId) => {
        setCartItems((prevCartItems) =>
            prevCartItems.map((item) =>
                item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const handleDecrement = (productId) => {
        setCartItems((prevCartItems) =>
            prevCartItems.map((item) =>
                item.productId === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };

    const getTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handlePaymentConfirmation = () => {
        // Reset the cart after successful payment
        setCartItems([]);
        // Navigate to the payment confirmation route
        navigate('/payment-confirmation');
    };

    return (
        <div className={styles.cart}>
            <h1>Cart</h1>
            <div className={styles['cart-container']}>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        {cartItems.map((item) => (
                            <CartItem
                                key={item.productId}
                                item={item}
                                onRemove={handleRemoveItem}
                                onIncrement={handleIncrement}
                                onDecrement={handleDecrement}
                            />
                        ))}
                        <p className={styles.total}>Total: RS. {getTotal()}</p>
                        <button className={styles.paymentButton} onClick={handlePaymentConfirmation}>
                            Proceed to Payment
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
