import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './ProductList.css';

export default function ProductList({ cartItems, setCartItems }) {
    const [products, setProducts] = useState([]);
    const [quantities, setQuantities] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            const token = user.token;

            const response = await axios.get('https://e-commerce-backend-d34m.onrender.com', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setProducts(response.data);
            setQuantities(response.data.reduce((acc, product) => ({ ...acc, [product._id]: 0 }), {}));
        } catch (error) {
            console.log(error);
        }
    };

    const handleAddToCart = (productId) => {
        const selectedQuantity = quantities[productId];
        const selectedProduct = products.find((product) => product._id === productId);

        if (selectedProduct) {
            const newItem = {
                productId: selectedProduct._id,
                name: selectedProduct.name,
                price: selectedProduct.price,
                image: selectedProduct.image,
                quantity: selectedQuantity > 0 ? selectedQuantity : 1,
            };

            const isItemInCart = cartItems.find((item) => item.productId === productId);

            if (isItemInCart) {
                alert('Product is already in the cart.');
            } else {
                setCartItems((prevCartItems) => [...prevCartItems, newItem]);
            }
        }
    };

    return (
        <div>
            <h1>Product List</h1>
            <div className="Product-container">
                {products.map((product) => (
                    <div key={product._id} className="product-card">
                        <img className="product-image" src={product.image} alt="product" />
                        <div className="product-details">
                            <h2>{product.name}</h2>
                            <p>Price: RS. {product.price}</p>
                            <div className="quantity-container">
                                <button className="add-to-cart-button" onClick={() => handleAddToCart(product._id)}>
                                    {cartItems.find((item) => item.productId === product._id)
                                        ? 'Already in Cart'
                                        : 'Add to Cart'}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
