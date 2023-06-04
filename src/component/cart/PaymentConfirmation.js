import { Route, useNavigate } from 'react-router-dom';

const PaymentConfirmation = ({ setCartItems }) => {
    const navigate = useNavigate();

    const handlePaymentConfirmation = () => {
        setCartItems([]);
        navigate('/');
    };

    return (
        <div>
            <h1>Order Placed Successfully!</h1>
            <p style={{ textAlign: "center", fontWeight: "bold" }}>Thank you for your purchase.</p>
            <button onClick={handlePaymentConfirmation} style={{ display: "block", margin: "0 auto" }}>
                Go to Home
            </button>
        </div>
    );
};

export default PaymentConfirmation;
