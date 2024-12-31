import { useState } from "react";

interface Props {
   searchRestaurant: (query: string, minRating: number) => void;
}

const InputElements = ({ searchRestaurant }: Props) => {
   const [input, setInput] = useState("");
   const [ratingInput, setRatingInput] = useState(0);

   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      searchRestaurant(input, ratingInput);
      setInput(e.target.value);
   };

   return (
      <div className="w-full mt-10 py-4 px-20 flex items-center justify-between">
         <input
            type="text"
            placeholder="Search restaurants..."
            value={input}
            onChange={handleSearch}
            className="border p-2 rounded-lg"
         />
         <div>
            <span>Minimum Rating: </span>
            <input
               type="number"
               name=""
               id=""
               value={ratingInput}
               onChange={(e) => setRatingInput(+e.target.value)}
               min={0}
               max={5}
               className="border p-2 rounded-lg"
            />
         </div>
      </div>
   );
};

export default InputElements;
