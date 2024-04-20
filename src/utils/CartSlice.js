import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: 'Cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      console.log(action.payload);
    },
    removeItem: (state, action) => {
      console.log(action.payload);
      const index = state.items.findIndex(item => item.card.info.id === action.payload); // Assuming each item has an 'id' property
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    clearCart: (state, action) => {
      state.items = [];
    }
  }
});

export const { addItem, removeItem, clearCart } = CartSlice.actions;

export default CartSlice.reducer;
