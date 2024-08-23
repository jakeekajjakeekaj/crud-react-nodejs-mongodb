import React from 'react'
import { useEffect } from 'react';
import { useTasks } from '../context/TasksContext.jsx';
import TaskCard from '../components/TaskCard.jsx';

export default function TasksPage() {
  const { getTasks, tasks } = useTasks();
  // useEffect indica que apenas carga algo, que cargue lo que se indica dentro
  useEffect(()=> {
    getTasks();
  }, []);

  if (tasks.length === 0) return (<h1>No tasks</h1>);

  return (
    // <div>TasksPage</div>
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2'>
      { tasks.map(task=> (
        <TaskCard task={ task } key={ task._id } />
      )) }
    </div>
  )
};