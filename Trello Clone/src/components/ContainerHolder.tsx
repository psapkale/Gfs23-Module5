import { useTasksContainers } from "@/context/TasksContext";
import TaskContainer from "./TaskContainer";

const ContainerHolder = () => {
   const { tasksContainers } = useTasksContainers();

   return (
      <div className="h-[90vh] p-12 bg-purple-600 flex items-start justify-evenly gap-8 overflow-x-scroll trello-scrollbar">
         {tasksContainers.map((container) => (
            <TaskContainer
               key={container.id}
               containerId={container.id}
               title={container.title}
               tasksList={container.tasksList}
            />
         ))}
      </div>
   );
};

export default ContainerHolder;
