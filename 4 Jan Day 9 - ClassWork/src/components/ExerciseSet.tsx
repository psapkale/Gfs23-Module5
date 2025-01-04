import React from "react";
import { useExercises } from "../hooks/useExercices";
import ExerciseTab from "./ExerciseTab";

const ExerciseSet = () => {
   const { exercises } = useExercises(0);

   return (
      <div className="flex items-center justify-between flex-wrap px-32 mt-2">
         {exercises.map((exercise) => (
            <ExerciseTab key={exercise.id} exercise={exercise} />
         ))}
      </div>
   );
};

export default ExerciseSet;
