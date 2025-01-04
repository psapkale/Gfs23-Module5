import { useState, useEffect } from "react";
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

export const useExercises = () => {
   const [exercises, setExercises] = useState<IExercise[]>(e);

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
         console.log(response.data);
      } catch (error) {
         console.error(error);
      }
   };

   useEffect(() => {
      getExercises(0);
   }, []);

   return { exercises, setExercises, getExercises };
};
