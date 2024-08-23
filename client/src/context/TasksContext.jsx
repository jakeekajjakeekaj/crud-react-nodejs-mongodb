// Este componente es muy usado para compartir datos entre diferentes componentes sin tener que starlos compartiendo todos de forma manual

import { 
  createContext, 
  useContext, 
  useState
} from 'react';
import { 
  createTaskRequest, 
  getTasksRequests, 
  deleteTaskRequest,
  getTaskRequest,
  updateTaskRequest
} from '../api/tasks.js';

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
  };

  // Función que nos permitirá guardar en el backend
  const createTask = async (task)=> {
    // console.log('task!');
    const res = await createTaskRequest(task);
    console.log(res);
  };

  const deleteTask = async (id)=> {
    // const res = await deleteTaskRequest(id);
    // console.log(res);
    try {
      const res = await deleteTaskRequest(id);
      if(res.status === 204) setTasks(tasks.filter(task=> task._id != id));
    } catch (error) {
      console.log(error);
    }
  };

  const getTask = async (id)=> {
    try {
      const res = await getTaskRequest(id);
      // console.log(res);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }

  // Para este caso es el id de la tarea que se actualizará y el segundo valor serán los nuevos valores de las task
  const updateTask = async (id, task)=> {
    try {
      await updateTaskRequest(id, task);
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <TaskContext.Provider value={{ 
      tasks,
      createTask,
      getTasks,
      deleteTask,
      getTask,
      updateTask
    }}>
      { children }
    </TaskContext.Provider>
  );
}