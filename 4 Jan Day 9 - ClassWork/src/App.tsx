import "./App.css";
import ExerciseSet from "./components/ExerciseSet";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import { ExerciseProvider } from "./context/ExerciseContext";

function App() {
   return (
      <ExerciseProvider>
         <Header />
         <SearchInput />
         <ExerciseSet />
      </ExerciseProvider>
   );
}

export default App;
