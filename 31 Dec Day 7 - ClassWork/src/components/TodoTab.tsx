import { TodoType } from "../context/TodoProvider";

interface Props {
   todo: TodoType;
   handleChecked: (
      createdAt: number,
      e: React.ChangeEvent<HTMLInputElement>
   ) => void;
   handleDeleteTodo: (createdAt: number) => void;
}

const TodoTab = ({ todo, handleChecked, handleDeleteTodo }: Props) => {
   return (
      <div className="w-full flex items-center justify-between">
         <div className="flex items-center gap-4">
            <input
               type="checkbox"
               onChange={(e) => handleChecked(todo.createdAt, e)}
            />
            <h1 className={`${todo.isCompleted ? "line-through" : ""}`}>
               {todo.title}
            </h1>
         </div>
         <button
            className="bg-slate-950 shadow-sm shadow-[#020617] px-1 hover:shadow-md text-white cursor-pointer"
            onClick={() => handleDeleteTodo(todo.createdAt)}
         >
            Delete
         </button>
      </div>
   );
};

export default TodoTab;
