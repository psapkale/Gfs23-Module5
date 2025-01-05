import { createContext, useContext, useState } from "react";
import { e } from "../utils";
import axios from "axios";

export interface IExercise {
   id: string;
   bodyPart: string;
   equipment: string;
   gifUrl: string;
   name: string;
   target: string;
   secondaryMuscles: string[];
   instructions: string[];
}

interface IExerciseContext {
   exercises: IExercise[];
   setExercises: (exercises: IExercise[]) => void;
}

const ExerciseContext = createContext<IExerciseContext>({
   exercises: e,
   setExercises: () => {},
});

const useExercises = () => {
   const { exercises, setExercises } = useContext(ExerciseContext);

   const getExercises = async (offset: number) => {
      const options = {
         method: "GET",
         url: "https://exercisedb.p.rapidapi.com/exercises",
         params: {
            limit: "10",
            offset,
         },
         headers: {
            "x-rapidapi-key": import.meta.env.VITE_RAPIDAPIKEY,
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
         },
      };

      try {
         const response = await axios.request(options);
         setExercises(response.data);
      } catch (error) {
         console.error(error);
      }
   };

   return { exercises, setExercises, getExercises };
};

const ExerciseProvider = ({ children }: { children: React.ReactNode }) => {
   const [exercises, setExercises] = useState<IExercise[]>(e);

   return (
      <ExerciseContext.Provider value={{ exercises, setExercises }}>
         {children}
      </ExerciseContext.Provider>
   );
};

export { useExercises, ExerciseProvider };
