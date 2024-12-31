// @ts-nocheck
import React from "react";

interface Props {
   restaurant: Object;
}

const RestaurantCard = ({ restaurant }: Props) => {
   return (
      <div className="shadow-md w-[90%] md:w-[440px] h-[20vh] pt-2 rounded-lg flex items-start justify-between flex-col">
         <div className="flex items-center gap-2 py-2 px-3">
            <h1 className="text-lg font-[600]">{restaurant.name}</h1>
            <div className="flex items-center">
               {Array(5)
                  .fill("")
                  .map((_, i) => (
                     <img
                        key={i}
                        src={
                           i <= restaurant.avgRating
                              ? "/star.svg"
                              : "star-empty.svg"
                        }
                     />
                  ))}
            </div>
         </div>
         <div className="flex items-center gap-2 px-3">
            <img src="/location.svg" alt="" />
            <span>{restaurant.areaName + ", " + restaurant.locality}</span>
         </div>
         <div className="w-full bg-slate-200 text-green-500 py-2 px-3 flex items-center gap-1">
            <img src="/food.svg" alt="" />
            <span>{restaurant.cuisines[0]}</span>
         </div>
      </div>
   );
};

export default RestaurantCard;
