import {
   ITask,
   ITasksContainer,
   useTasksContainers,
} from "@/context/TasksContext";
import React from "react";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import TaskTab from "./TaskTab";

interface Props {
   containerId: number;
   title: string;
   tasksList: ITask[];
}

const TaskContainer = ({ containerId, title, tasksList }: Props) => {
   const { deleteTask } = useTasksContainers();

   const handleDeleteTask = (taskId: number) => {
      deleteTask(taskId, containerId);
   };

   return (
      <Card className="min-w-[28vw]">
         <CardHeader>
            <CardTitle className="capitalize">{title}</CardTitle>
         </CardHeader>
         <CardContent>
            {tasksList.map((task) => (
               <TaskTab
                  key={task.id}
                  task={task}
                  handleDeleteTask={handleDeleteTask}
               />
            ))}
         </CardContent>
         <CardFooter>
            <Button variant="secondary" className="w-full">
               <Plus /> Add another card
            </Button>
         </CardFooter>
      </Card>
   );
};

export default TaskContainer;
