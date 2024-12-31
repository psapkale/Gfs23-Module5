import RestaurantCard from "./RestaurantCard";

interface Props {
   restaurants: Object[];
   index: number;
   offset: number;
}

const RestaurantCardContainer = ({ restaurants, index, offset }: Props) => {
   return (
      <div className="w-[90vw] my-10 mx-auto flex flex-wrap items-center justify-center md:justify-between gap-3">
         {restaurants
            .slice(index * offset, index * offset + offset)
            .map((res) => (
               // @ts-ignore
               <RestaurantCard key={res.id} restaurant={res} />
            ))}
      </div>
   );
};

export default RestaurantCardContainer;
