import React, { useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId); 
    const [showIndex,setShowIndex] = useState(null);

        const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
            return (
                c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            );
        });
    
    
    if (resInfo === null) return <Shimmer />;

    const { text} = resInfo?.data?.cards[0]?.card?.card;
    return (
        <div>
            <h2 className='text-center font-bold text-lg my-6'>{text}</h2>
            {categories.map((cat,index)=>{
               return <RestaurantCategory data = {cat.card.card} showItems = {index === showIndex ? true : false} setShowIndex = {()=>setShowIndex(index)}/>
            }
            )}
        </div>
    );
}

export default RestaurantMenu;
