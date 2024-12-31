import { useState, useEffect } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";

function App() {
   const [value, setValue] = useState(0);
   const [success, setSuccess] = useState(false);

   function onSuccess() {
      setSuccess(true);
   }

   useEffect(() => {
      setInterval(() => {
         setValue((val) => val + 0.2);
      }, 20);
   }, []);

   return (
      <div className="w-full flex items-center justify-center">
         <ProgressBar value={value} success={success} onSuccess={onSuccess} />
      </div>
   );
}

export default App;
