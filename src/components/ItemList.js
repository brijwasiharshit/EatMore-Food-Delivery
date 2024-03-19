import React from 'react';
import { CDN_URL } from '../utils/constants';
import { addItem } from '../utils/CartSlice';
import { useDispatch } from 'react-redux';

const ItemList = ({ items ,showButton}) => {
  const dispatch = useDispatch();
  const handleAddItem = (i) => {
    dispatch(addItem(i));
  }
  return (
    <div>
      {items.map((i, index) => (
        <div key={index} className='flex m-2 border-b-2 border-gray-600 p-3 relative justify-between'>
          <div className='flex flex-col w-9/12'>
            <div className='flex'>
              <span className='font-semibold'>{i?.card?.info?.name}</span>
            <span className='font-semibold'>{"  -  " + (i?.card?.info?.price / 100) + "₹"}</span>
            </div>
            <p>{i?.card?.info?.description}</p>
          </div>
          <div className="relative">
            <img className='h-36 w-48' src={CDN_URL + i?.card?.info.imageId} alt={i?.card?.info?.name} />
            {showButton && <button className='absolute bottom-0 left-0 mb-2 ml-1 bg-gray-700 text-white rounded-md' onClick={()=> handleAddItem(i)}>Add +</button>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
