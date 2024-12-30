import { ToastContainer } from "react-toastify";
import "./App.css";
import Content from "./components/Content";
import { TodoProvider } from "./context/TodoProvider";

function App() {
   return (
      <div className="w-screen h-screen flex items-start justify-center py-4 bg-slate-50">
         <TodoProvider>
            <Content />
            <ToastContainer position="top-right" />
         </TodoProvider>
      </div>
   );
}

export default App;
