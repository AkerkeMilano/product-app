import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
  },
  reducers: {
    addToChart: (state, action) => {
        const itemInChart = state.cart.find((item) => item.id === action.payload.id);
        if(itemInChart) {
            itemInChart.quantity += action.payload.quantity;
        } else {
            state.cart.push({...action.payload});
        }
    },
    removeFromChart: (state, action) => {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id)
    },
    clearCart: (state, action) => {
        state.cart = [];
    }
  },
});

export default cartSlice.reducer;
export const {
    addToChart,
    removeFromChart,
    clearCart
} = cartSlice.actions;