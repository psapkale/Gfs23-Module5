import "./App.css";
import QuestionSet from "./components/QuestionSet";
import { useQuestions } from "./hooks/useQuestions";

function App() {
   const { questions, error } = useQuestions();

   return error && !questions.length ? (
      <div className="w-full h-screen flex items-center justify-center">
         {error.message}, please refresh
      </div>
   ) : questions.length ? (
      <QuestionSet questions={questions} />
   ) : (
      <div className="w-full h-screen flex items-center justify-center">
         loading..
      </div>
   );
}

export default App;
