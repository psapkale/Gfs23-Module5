import "./App.css";
import ExerciseSet from "./components/ExerciseSet";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import { useExercises } from "./hooks/useExercices";

function App() {
   const { exercises, getExercises } = useExercises();

   return (
      <div>
         <Header />
         <SearchInput />
         <ExerciseSet exercises={exercises} getExercises={getExercises} />
      </div>
   );
}

export default App;
