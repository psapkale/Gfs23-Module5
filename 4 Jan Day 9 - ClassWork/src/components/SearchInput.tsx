import { useState } from "react";
import { IExercise, useExercises } from "../hooks/useExercices";

const SearchInput = () => {
   const { exercises, setExercises } = useExercises();
   const [saveExercises] = useState(exercises);
   const [query, setQuery] = useState("");

   const handleSearch = () => {
      if (!query.length) {
         setExercises(saveExercises);
         return;
      }

      const updatedExercises = saveExercises.filter((x: IExercise) => {
         return (
            x.name.toLowerCase().includes(query.toLowerCase()) ||
            x.bodyPart.toLowerCase().includes(query.toLowerCase())
         );
      });

      setExercises(updatedExercises);
   };

   return (
      <div className="border-b  py-8 px-32 flex items-center justify-between">
         <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            className="w-[50vw] text-lg text-slate-800 border border-slate-500 rounded-md py-1 px-3"
            placeholder="Search any exercise"
         />

         <button
            className="border border-slate-800 shadow-sm rounded-md py-2 px-8"
            onClick={handleSearch}
         >
            Search
         </button>
      </div>
   );
};

export default SearchInput;
