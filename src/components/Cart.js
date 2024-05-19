import React from 'react';
import ItemList from './ItemList';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/CartSlice';
import Billing from './Billing';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className='flex justify-between'>
      <div className="w-6/12 mx-auto my-8 bg-green-100 p-4 rounded-lg flex flex-col justify-center">
      <ItemList items={cartItems} buttonType = "remove"/>
      {cartItems.length > 0 ? (
        <button
          className="bg-red-100 text-yellow rounded-md mt-4 py-2 px-4 border-2 border-black"
          onClick={handleClearCart}>
          Clear Cart
        </button>
      ) : (
        <h1 className="text-lg bg-red-400 text-white p-4 rounded-md text-center font-bold">Cart is empty</h1>
      )}
    </div>
    {
      cartItems.length > 0 && <Billing />
    }
    </div>
  );
};

export default Cart;
