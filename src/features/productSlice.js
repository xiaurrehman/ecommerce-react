import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [
        { id: 1, name: 'Product 1', price: 100, description: 'Description of Product 1' },
        { id: 2, name: 'Product 2', price: 150, description: 'Description of Product 2' },
        { id: 3, name: 'Product 3', price: 200, description: 'Description of Product 3' },
    ],
    cart: [],
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.cart.find((cartItem) => cartItem.id === action.payload.id);
            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.cart.push(action.payload);
            }
        },
    },
});

export const { addToCart } = productSlice.actions;
export const selectProducts = (state) => state.products.products;
export const selectCart = (state) => state.products.cart;
export default productSlice.reducer;
