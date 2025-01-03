import { useState } from "react";
import { IQuestion } from "../hooks/useQuestions";
import QuestionTab from "./QuestionTab";

interface Props {
   questions: IQuestion[];
}

const QuestionSet = ({ questions }: Props) => {
   const [currIndex, setCurrIndex] = useState(0);
   const [isCorrects, setIsCorrects] = useState<boolean[]>(
      Array(10).fill(true)
   );

   const findQuestion = (question: string) => {
      return questions.find((x: IQuestion) => x.question === question);
   };

   const handleSubmitOption = (question: IQuestion, option: string) => {};

   const handleSkipQuestion = (index: number) => {
      const updatedAnswers = isCorrects;
      updatedAnswers[index] = false;

      setIsCorrects(updatedAnswers);
   };

   return (
      <div className="h-screen flex items-center justify-center flex-col">
         <h1 className="text-3xl font-bold">Quiz App</h1>
         <QuestionTab
            question={questions[currIndex]}
            index={currIndex}
            handleSubmitOption={handleSubmitOption}
            handleSkipQuestion={handleSkipQuestion}
         />
      </div>
   );
};

export default QuestionSet;
