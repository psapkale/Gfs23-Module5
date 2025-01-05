import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ScrollContainer from "./components/ScrollContainer";

function App() {
   const [query, setQuery] = useState("");

   return (
      <div>
         <Header query={query} setQuery={setQuery} />
         <ScrollContainer query={query} />
      </div>
   );
}

export default App;
