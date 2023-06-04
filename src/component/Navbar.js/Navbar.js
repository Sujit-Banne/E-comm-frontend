import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {

    const navigate = useNavigate();
    const auth = localStorage.getItem('user');

    const logout = () => {
        localStorage.clear();
        navigate('/login');
    };

    const home = () => {
        navigate('/');
    };

    const cart = () => {
        navigate('/cart');
    };

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/" onClick={home}>
                        <img src="https://res.cloudinary.com/dnfdw5o96/image/upload/v1685892579/Sujit-Cloudinary/Screenshot_1_sghntf.png" alt="logo" className="logo" />
                    </Link>
                </li>
                {auth ? (
                    <li className="navbar-item">
                        <Link to="/" onClick={home}>
                            Home
                        </Link>
                        <Link to="/cart" onClick={cart}>
                            Cart
                        </Link>
                        <Link to="/login" onClick={logout}>
                            Logout
                        </Link>
                    </li>
                ) : null}
            </ul>
        </nav>
    );
}
