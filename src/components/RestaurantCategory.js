import React, { useState } from 'react';
import ItemList from './ItemList';

const RestaurantCategory = ({data,showItems,setShowIndex}) => {

  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className='mx-auto w-6/12 bg-slate-200 shadow-lg' onClick={handleClick}>

      <div className='my-4 flex justify-between py-3 px-1 text-lg rounded-md hover:cursor-pointer'>
    <span className='font-bold'>{data.title} ({data.itemCards.length})</span>
    <span>⬇️</span>
      </div>

    {showItems && <ItemList key = {data.itemCards.id} items = {data.itemCards} buttonType="Add +" />}
    </div>
  )
}

export default RestaurantCategory;
