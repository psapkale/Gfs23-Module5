import { useState } from "react";
import { e } from "../utils";

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

export const useExercises = (offset: number) => {
   const [exercises, setExercices] = useState<IExercise[]>(e);
   // @ts-ignore
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

   const getExercises = async () => {
      // try {
      //    const response = await axios.request(options);
      //    console.log(response.data);
      // setExercices(response.data)
      // } catch (error) {
      //    console.error(error);
      // }
   };

   getExercises();
   // setExercices(e);

   return { exercises, setExercices };
};
