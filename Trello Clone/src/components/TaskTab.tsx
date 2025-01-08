import { ITask } from "@/context/TasksContext";
import { Trash } from "lucide-react";
import { Button } from "./ui/button";

interface Props {
   task: ITask;
   handleDeleteTask: (taskId: number) => void;
}

const TaskTab = ({ task, handleDeleteTask }: Props) => {
   return (
      <div className="border border-black rounded-md py-2 px-2 flex items-center justify-between group cursor-pointer">
         <h1>{task.content}</h1>
         <Button
            variant={"secondary"}
            className="w-8 h-8 self-end opacity-0 group-hover:opacity-100 transition-opacity duration-100"
            onClick={() => handleDeleteTask(task.id)}
         >
            <Trash />
         </Button>
      </div>
   );
};

export default TaskTab;
