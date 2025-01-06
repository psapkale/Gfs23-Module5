import { createContext, useContext, useState } from "react";

interface ITask {
   id: number;
   content: string;
   createdAt: number;
   parentTitle: string;
}

interface ITasksContainers {
   id: number;
   title: string;
   tasksList: ITask[];
}

interface ITasksContext {
   tasksContainers: ITasksContainers[];
   setTasksContainers: (tasksContainers: ITasksContainers[]) => void;
}

const firstTasksContainers: ITasksContainers[] = [
   {
      id: Math.random(),
      title: "To Do",
      tasksList: [
         {
            id: Math.random(),
            content: "do todo",
            createdAt: Date.now(),
            parentTitle: "To Do",
         },
      ],
   },
   {
      id: Math.random(),
      title: "In Progress",
      tasksList: [
         {
            id: Math.random(),
            content: "this is in progress",
            createdAt: Date.now(),
            parentTitle: "In Progress",
         },
      ],
   },
];

const TasksContext = createContext<ITasksContext>({
   tasksContainers: firstTasksContainers,
   setTasksContainers: (tasksContainers: ITasksContainers[]) => {},
});

const useTasksContainers = () => {
   const { tasksContainers, setTasksContainers } = useContext(TasksContext);

   const addTaskToContainer = (
      task: ITask,
      parentId: number,
      parentTitle: string
   ) => {};

   const deleteTaskFromContainer = (
      taskId: number,
      parentId: number,
      parentTitle: string
   ) => {};

   const updateTasksParentState = (
      taskId: number,
      parentId: number,
      parentTitle: string,
      newParentId: number,
      newParentTitle: string
   ) => {
      // ! update tasks parentTitle and move it to its respective parent container
   };

   return {
      tasksContainers,
      addTaskToContainer,
      deleteTaskFromContainer,
      updateTasksParentState,
   };
};

const TasksContainersProvider = ({
   children,
}: {
   children: React.ReactNode;
}) => {
   const [tasksContainers, setTasksContainers] =
      useState<ITasksContainers[]>(firstTasksContainers);

   return (
      <TasksContext.Provider value={{ tasksContainers, setTasksContainers }}>
         {children}
      </TasksContext.Provider>
   );
};

export { useTasksContainers, TasksContainersProvider };
