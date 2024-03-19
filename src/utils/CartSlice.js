import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice(
    {
        name : 'Cart',
        initialState: {
            items: [],
        },
        reducers : {
            addItem : (state,action) =>{
                state.items.push(action.payload);
                console.log(action.payload); 
            },
            removeItem : (state,action) =>{
                state.items.pop();
            },
            clearCart : (state,action) =>{
                state.items.length = 0;
            }
        }
    }
);

export const {addItem,removeItem,clearCart} = CartSlice.actions;

export default CartSlice.reducer;