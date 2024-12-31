import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import InputElements from "./component/InputElements";
import RestaurantCardContainer from "./component/RestaurantCardContainer";
import { restaurants } from "./utils";
import Pagination from "./component/Pagination";

function App() {
   const [allRestaurants, setAllRestaurants] = useState(restaurants);
   const [index, setIndex] = useState(0);
   const [offset, setOffset] = useState(9);

   const searchRestaurant = (query: string, minRating: number) => {
      if (query.length < 1) {
         setAllRestaurants(restaurants);
         return;
      }

      const searchResult = restaurants.filter(
         (res) =>
            res.name.toLowerCase().includes(query.toLowerCase()) &&
            res.avgRating >= minRating - 1
      );

      setAllRestaurants(searchResult);
   };

   return (
      <div>
         <Header />
         <InputElements searchRestaurant={searchRestaurant} />
         <RestaurantCardContainer
            restaurants={allRestaurants}
            index={index}
            offset={offset}
         />
         <Pagination
            arrLength={restaurants.length}
            index={index}
            setIndex={setIndex}
            offset={offset}
            setOffset={setOffset}
         />
      </div>
   );
}

export default App;
