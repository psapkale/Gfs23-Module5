import "./App.css";
import ExerciseSet from "./components/ExerciseSet";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";

function App() {
   return (
      <div>
         <Header />
         <SearchInput />
         <ExerciseSet />
      </div>
   );
}

export default App;
