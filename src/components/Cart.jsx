import { useSelector } from 'react-redux';
import { selectCart } from '../features/productSlice';

const Cart = () => {
    const cart = useSelector(selectCart);

    return (
        <div>
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cart.map((item) => (
                    <div key={item.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                        <h3>{item.name}</h3>
                        <p>Quantity: {item.quantity}</p>
                        <p>Total Price: ${item.price * item.quantity}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
