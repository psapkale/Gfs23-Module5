import { useState } from "react";
import { IQuestion } from "../hooks/useQuestions";
import QuestionTab from "./QuestionTab";
import Results from "./Results";

interface Props {
   questions: IQuestion[];
}

const QuestionSet = ({ questions }: Props) => {
   const [currIndex, setCurrIndex] = useState(0);
   const [isCorrects, setIsCorrects] = useState<boolean[]>(
      Array(10).fill(false)
   );

   const handleNextQuestion = () => {
      if (currIndex !== questions.length) {
         setCurrIndex((prev) => prev + 1);
      }
   };

   const handleSubmitOption = (
      question: IQuestion,
      option: string,
      index: number
   ) => {
      const updatedAnswers = isCorrects;
      updatedAnswers[index] = option === question.correct_answer;

      setIsCorrects(updatedAnswers);
      handleNextQuestion();
   };

   const handleSkipQuestion = (index: number) => {
      const updatedAnswers = isCorrects;
      updatedAnswers[index] = false;

      setIsCorrects(updatedAnswers);
      handleNextQuestion();
   };

   return (
      <div className="h-screen flex items-center justify-center flex-col">
         {currIndex === questions.length ? (
            <Results isCorrects={isCorrects} />
         ) : (
            <>
               <h1 className="text-3xl font-bold">Quiz App</h1>
               <QuestionTab
                  question={questions[currIndex]}
                  index={currIndex}
                  handleSubmitOption={handleSubmitOption}
                  handleSkipQuestion={handleSkipQuestion}
               />
            </>
         )}
      </div>
   );
};

export default QuestionSet;
