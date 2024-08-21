import React from 'react'
import { useEffect } from 'react';
import { useTasks } from '../context/TasksContext.jsx';

export default function TasksPage() {
  const { getTasks, tasks } = useTasks();
  // useEffect indica que apenas carga algo, que cargue lo que se indica dentro
  useEffect(()=> {
    getTasks();
  }, []);

  if (tasks.length === 0) return (<h1>No tasks</h1>);

  return (
    // <div>TasksPage</div>
    <div>
      { tasks.map(task=> (
        <div key={task._id}>
          <h1>{ task.title }</h1>
          <p>{ task.description }</p>
        </div>
      )) }
    </div>
  )
};