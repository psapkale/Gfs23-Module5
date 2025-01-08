import { createContext, useContext, useState } from "react";

export interface ITask {
   id: number;
   content: string;
   createdAt: number;
}

export interface ITasksContainer {
   id: number;
   title: string;
   tasksList: ITask[];
   createdAt: number;
}

interface ITasksContext {
   tasksContainers: ITasksContainer[];
   setTasksContainers: (tasksContainers: ITasksContainer[]) => void;
}

const firstTasksContainers: ITasksContainer[] = [
   {
      id: 1,
      title: "To Do",
      tasksList: [
         {
            id: 1,
            content: "do todo",
            createdAt: Date.now(),
         },
      ],
      createdAt: Date.now(),
   },
   {
      id: 2,
      title: "In Progress",
      tasksList: [
         {
            id: 2,
            content: "this is in progress",
            createdAt: Date.now(),
         },
      ],
      createdAt: Date.now(),
   },
];

const TasksContext = createContext<ITasksContext>({
   tasksContainers: firstTasksContainers,
   setTasksContainers: (tasksContainers: ITasksContainer[]) => {},
});

const useTasksContainers = () => {
   const { tasksContainers, setTasksContainers } = useContext(TasksContext);

   const getParentContainer = (parentId: number) => {
      return tasksContainers.find((x: ITasksContainer) => x.id === parentId);
   };

   const updateTasksContainers = (parentContainer: ITasksContainer) => {
      setTasksContainers(
         [
            parentContainer,
            ...tasksContainers.filter(
               (x: ITasksContainer) => x.id !== parentContainer.id
            ),
         ].sort(
            (a: ITasksContainer, b: ITasksContainer) =>
               a.createdAt - b.createdAt
         )
      );
   };

   const createTask = (content: string, parentId: number) => {
      const parentContainer = getParentContainer(parentId);

      if (parentContainer) {
         const newTask: ITask = {
            id: Math.random(),
            content,
            createdAt: Date.now(),
         };

         parentContainer.tasksList.push(newTask);
         updateTasksContainers(parentContainer);
      }
   };

   const deleteTask = (taskId: number, parentId: number) => {
      const parentContainer = getParentContainer(parentId);

      if (parentContainer) {
         parentContainer.tasksList = parentContainer.tasksList.filter(
            (x: ITask) => x.id !== taskId
         );

         updateTasksContainers(parentContainer);
      }
   };

   const updateTasksParentState = (
      taskId: number,
      parentId: number,
      newParentId: number
   ) => {
      // ! remove task from parent container and move it to its respective parent container
      const parentContainer = getParentContainer(parentId);
      const newParentContainer = getParentContainer(newParentId);

      if (parentContainer && newParentContainer) {
         const task = parentContainer.tasksList.find(
            (x: ITask) => x.id === taskId
         );

         if (task) {
            parentContainer.tasksList = parentContainer.tasksList.filter(
               (x: ITask) => x.id !== taskId
            );
            updateTasksContainers(parentContainer);

            newParentContainer.tasksList.push(task);
            updateTasksContainers(newParentContainer);
         }
      }
   };

   return {
      tasksContainers,
      createTask,
      deleteTask,
      updateTasksParentState,
   };
};

const TasksContainersProvider = ({
   children,
}: {
   children: React.ReactNode;
}) => {
   const [tasksContainers, setTasksContainers] =
      useState<ITasksContainer[]>(firstTasksContainers);

   return (
      <TasksContext.Provider value={{ tasksContainers, setTasksContainers }}>
         {children}
      </TasksContext.Provider>
   );
};

export { useTasksContainers, TasksContainersProvider };
