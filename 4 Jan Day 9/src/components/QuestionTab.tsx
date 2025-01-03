import React from "react";
import { IQuestion } from "../hooks/useQuestions";

interface Props {
   question: IQuestion;
   index: number;
   handleSubmitOption: (question: IQuestion, option: string) => void;
   handleSkipQuestion: (index: number) => void;
}

const QuestionTab = ({
   question,
   index,
   handleSubmitOption,
   handleSkipQuestion,
}: Props) => {
   const shuffledOptions = [
      question.correct_answer,
      ...question.incorrect_answers,
   ].sort((a: string, b: string) => a.localeCompare(b));

   return (
      <div className="mt-10 flex items-start justify-center flex-col gap-2">
         <h1 className="text-2xl font-bold">Question {index + 1}</h1>
         <h1>{question.question}</h1>
         <ul
            className="flex items-start justify-center flex-col gap-2
         "
         >
            {shuffledOptions.map((option) => (
               <li key={option} className="" style={{ listStyle: "circle" }}>
                  <button
                     onClick={() => handleSubmitOption(question, option)}
                     className="border border-slate-400 py-1 px-2 cursor-pointer rounded-md hover:border-slate-800"
                  >
                     {option}
                  </button>
               </li>
            ))}
         </ul>
         <span>Time left: {0} seconds</span>
         <button
            onClick={() => handleSkipQuestion(index)}
            className="border py-1 px-2 cursor-pointer rounded-md hover:border-slate-500"
         >
            Skip Question
         </button>
      </div>
   );
};

export default QuestionTab;
