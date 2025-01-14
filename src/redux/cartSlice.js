import { createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            let currentUser = JSON.parse(atob(localStorage.getItem('currentUser')));

            const existingProductIndex = state.items.findIndex(
                (item) => item.id === action.payload.id && item.userId === currentUser.id
            );

            if (existingProductIndex !== -1) {
                state.items[existingProductIndex].quantity += action.payload.quantity || 1;
                swal("Success!", "Item quantity updated in the cart", "success");
            } else {
                const newProduct = {
                    ...action.payload,
                    quantity: action.payload.quantity || 1,
                    userId: currentUser.id,
                };
                state.items.push(newProduct);
                swal("Success!", "Item added to the cart", "success");
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload.id && item.userId === action.payload.userId);
            if (item) {
                item.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload.id && item.userId === action.payload.userId);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        clearCart: (state, action) => {
            let currentUser = JSON.parse(atob(localStorage.getItem('currentUser')));
            state.items = state.items.filter((item) => item.userId !== currentUser.id);
        }
    }
});

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
