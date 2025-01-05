import { IExercise } from "../context/ExerciseContext";

interface Props {
   exercise: IExercise;
}

const ExerciseTab = ({ exercise }: Props) => {
   return (
      <div className="border border-slate-200 cursor-pointer p-2 px-4 rounded-md">
         <img
            src={exercise.gifUrl}
            alt={exercise.name}
            className="w-[400px] h-[300px]"
         />
         <hr className="w-full border border-slate-20 mt-2" />
         <h1 className="w-full capitalize mt-2 text-md font-bold">
            {exercise.name}
         </h1>
         <h2 className="capitalize text-sm">{exercise.equipment}</h2>
      </div>
   );
};

export default ExerciseTab;
