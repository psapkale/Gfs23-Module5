import { useState } from "react";
import TodoList from "./TodoList";
import { useTodo } from "../context/TodoProvider";
import { toast } from "react-toastify";

const Content = () => {
   const { todos, setTodos } = useTodo();
   const [input, setInput] = useState("");

   const handleAddTodo = () => {
      if (!input.length) return;
      setTodos(
         [
            ...todos,
            {
               title: input,
               isCompleted: false,
               createdAt: Date.now(),
            },
         ].sort((a, b) => a.createdAt - b.createdAt)
      );
      setInput("");
      toast.success("Added todo to the list");
   };

   return (
      <div className="w-[30vw] flex items-center bg-white gap-3 justify-center flex-col p-10 shadow-md hover:shadow-lg transition-shadow duration-150 mt-20">
         <h1 className="text-2xl">Grocery Bud</h1>
         <div className="w-full flex items-center justify-center">
            <input
               type="text"
               value={input}
               onChange={(e) => setInput(e.target.value)}
               className="w-[80%] border bg-slate-50 p-1"
            />
            <button
               className="text-nowrap bg-blue-400 shadow-sm shadow-[#60a5fa] hover:shadow-md text-white py-1 px-3 cursor-pointer"
               onClick={handleAddTodo}
            >
               Add Item
            </button>
         </div>
         <TodoList />
      </div>
   );
};

export default Content;
