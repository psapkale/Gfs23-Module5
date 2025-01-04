import axios from "axios";
import { useState, useEffect } from "react";

const API_URL =
   "https://opentdb.com/api.php?amount=10&category=9&type=multiple";

export interface IQuestion {
   category: "General Knowledge";
   correct_answer: string;
   difficulty: string;
   incorrect_answers: string[];
   question: string;
   type: "multiple";
}

export const useQuestions = () => {
   const [questions, setQuestions] = useState<Readonly<IQuestion>[]>([]);
   const [error, setError] = useState<{ message: string } | undefined>(
      undefined
   );

   const getQuestions = async () => {
      await axios
         .get(API_URL)
         .then((res) => setQuestions(res.data.results))
         .catch(() => {
            setError({ message: "Something went wrong" });
         });
   };

   useEffect(() => {
      getQuestions();
   }, []);

   return { questions, error };
};
