import React from 'react';
import { useSelector } from 'react-redux';

const Billing = () => {
    const items = useSelector((store) => store.cart.items);
    const totalPrice = items.reduce((acc, item) => acc + (item.card.info.price) / 100, 0);
    const deliveryCharge = items.length === 0 ? 0 : 40; // Assuming fixed delivery charge
    const totalAmount =  totalPrice + deliveryCharge;

    return (
        <div className=' bg-yellow-50 my-8 p-4 mr-8 border border-black shadow-lg rounded-lg h-fit' >
            <h1 className='text-3xl border-b-2 py-2 border-black mb-4'>Order Summary</h1>
            <div className='flex justify-between mb-4'>
                <span className='text-lg'>Total Price:</span>
                <span className='font-bold'>{totalPrice} ₹</span>
            </div>
            <div className='flex justify-between mb-4'>
                <span className='text-lg'>Delivery Charges:</span>
                <span className='font-bold'>{deliveryCharge} ₹</span>
            </div>
            <div className='flex justify-between'>
                <h1 className='text-xl'>Total Amount:</h1>
                <span className='font-bold'>{totalAmount} ₹</span>
            </div>
            <button className='bg-orange-400 text-white py-2 px-4 mt-4 rounded-md hover:bg-orange-500 focus:outline-none mx-auto w-full'>
                Place Order
            </button>
        </div>
    );
}

export default Billing;
