import { toast } from "react-toastify";
import { useTodo } from "../context/TodoProvider";
import TodoTab from "./TodoTab";

const TodoList = () => {
   const { todos, setTodos } = useTodo();

   const handleChecked = (
      createdAt: number,
      e: React.ChangeEvent<HTMLInputElement>
   ) => {
      const todo = todos.find((x) => x.createdAt === createdAt);

      if (todo) {
         const updatedTodo = { ...todo, isCompleted: e.target.checked };
         setTodos(
            [
               updatedTodo,
               ...todos.filter((x) => x.createdAt !== updatedTodo.createdAt),
            ].sort((a, b) => a.createdAt - b.createdAt)
         );
      }
   };

   const handleDeleteTodo = (createdAt: number) => {
      const todo = todos.find((x) => x.createdAt === createdAt);

      if (todo) {
         setTodos(
            [...todos.filter((x) => x.createdAt !== createdAt)].sort(
               (a, b) => a.createdAt - b.createdAt
            )
         );
      }

      toast.success("Deleted todo from the list");
   };

   return (
      <div className="w-full flex items-center justify-center gap-2 flex-col mt-1">
         {todos.map((todo, i) => (
            <TodoTab
               key={i}
               todo={todo}
               handleChecked={handleChecked}
               handleDeleteTodo={handleDeleteTodo}
            />
         ))}
      </div>
   );
};

export default TodoList;
