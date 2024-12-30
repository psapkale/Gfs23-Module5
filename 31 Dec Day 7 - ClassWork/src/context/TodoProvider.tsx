import { createContext, useState, useContext } from "react";

export interface TodoType {
   title: string;
   isCompleted: boolean;
   createdAt: number;
}

interface TodoContextType {
   todos: TodoType[];
   setTodos: (todos: TodoType[]) => void;
}

const TodoContext = createContext<TodoContextType>({
   todos: [],
   setTodos: (todos: TodoType[]) => {},
});

const useTodo = () => useContext(TodoContext);

const TodoProvider = ({ children }: { children: React.ReactNode }) => {
   const [todos, setTodos] = useState<TodoType[]>([]);

   return (
      <TodoContext.Provider value={{ todos, setTodos }}>
         {children}
      </TodoContext.Provider>
   );
};

export { useTodo, TodoProvider };
