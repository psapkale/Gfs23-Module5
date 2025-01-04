import { useEffect, useState } from "react";
import { IExercise } from "../hooks/useExercices";
import ExerciseTab from "./ExerciseTab";

interface Props {
   exercises: IExercise[];
   getExercises: (i: number) => void;
}

const ExerciseSet = ({ exercises, getExercises }: Props) => {
   console.log(exercises);

   const [currIndex, setCurrIndex] = useState(0);

   const handlePrev = () => {
      if (currIndex === 0) {
         return;
      }

      setCurrIndex((p) => p - 1);
   };

   const handleNext = () => {
      if (currIndex === exercises.length - 1) {
         return;
      }

      setCurrIndex((p) => p + 1);
   };

   const handleIndex = (i: number) => {
      setCurrIndex(i);
   };

   useEffect(() => {
      getExercises(currIndex);
   }, [currIndex]);

   return (
      <div>
         <div className="flex items-center justify-between gap-2 flex-wrap px-24 mt-2">
            {exercises.map((exercise) => (
               <ExerciseTab key={exercise.id} exercise={exercise} />
            ))}
         </div>
         <hr className="w-[90vw] border border-slate-100 my-10 mx-auto" />
         <div className="mb-10 flex items-center justify-center gap-2">
            <button
               onClick={handlePrev}
               className="border border-slate-200 py-1 px-4 rounded-sm cursor-pointer disabled:border-none disabled:cursor-not-allowed"
               disabled={currIndex === 0}
            >
               Prev
            </button>
            {exercises.map((_, i) => (
               <button
                  onClick={() => handleIndex(i)}
                  className="border border-slate-200 py-1 px-4 rounded-sm cursor-pointer disabled:border-none disabled:cursor-not-allowed"
                  disabled={currIndex === i}
               >
                  {i + 1}
               </button>
            ))}
            <button
               onClick={handleNext}
               className="border border-slate-200 py-1 px-4 rounded-sm cursor-pointer disabled:border-none disabled:cursor-not-allowed"
               disabled={currIndex === exercises.length - 1}
            >
               Next
            </button>
         </div>
      </div>
   );
};

export default ExerciseSet;
