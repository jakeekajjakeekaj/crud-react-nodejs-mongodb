// Este componente es muy usado para compartir datos entre diferentes componentes sin tener que starlos compartiendo todos de forma manual

import { createContext, useContext, useState } from 'react';
import { createTaskRequest, getTasksRequests, deleteTaskRequest } from '../api/tasks.js';

const TaskContext = createContext();

export const useTasks = ()=> {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
}

export function TaskProvider({ children }) {

  const [ tasks, setTasks ] = useState([]);

  const getTasks = async ()=> {
    try {
      const res = await getTasksRequests();
      // console.log(res);
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  // Función que nos permitirá guardar en el backend
  const createTask = async (task)=> {
    // console.log('task!');
    const res = await createTaskRequest(task);
    console.log(res);
  }

  const deleteTask = async (id)=> {
    // const res = await deleteTaskRequest(id);
    // console.log(res);
    try {
      const res = await deleteTaskRequest(id);
      if(res.status === 204) setTasks(tasks.filter(task=> task._id != id));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TaskContext.Provider value={{ 
      tasks,
      createTask,
      getTasks,
      deleteTask,
    }}>
      { children }
    </TaskContext.Provider>
  );
}