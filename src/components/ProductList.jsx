import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts, addToCart } from '../features/productSlice';

const ProductList = () => {
    const products = useSelector(selectProducts);
    const dispatch = useDispatch();
    const [quantities, setQuantities] = useState({});

    const handleQuantityChange = (id, value) => {
        setQuantities({ ...quantities, [id]: parseInt(value, 10) || 0 });
    };

    const handleAddToCart = (product) => {
        const quantity = quantities[product.id] || 1; // Default to 1 if not specified
        dispatch(addToCart({ ...product, quantity }));
    };

    return (
        <div>
            {products.map((product) => (
                <div key={product.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <div>
                        <label htmlFor={`quantity-${product.id}`}>Quantity:</label>
                        <input
                            id={`quantity-${product.id}`}
                            type="number"
                            min="1"
                            value={quantities[product.id] || ''}
                            onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                            style={{ marginLeft: '10px', width: '50px' }}
                        />
                    </div>
                    <button
                        onClick={() => handleAddToCart(product)}
                        style={{ marginTop: '10px', backgroundColor: '#007BFF', color: '#fff', padding: '5px 10px', border: 'none', cursor: 'pointer' }}
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
