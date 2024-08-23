import React from 'react'
import { useForm } from 'react-hook-form';
import { useTasks } from '../context/TasksContext';
// useParams nos permite obtener un objto con los datos dinámicos de la URL
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
// La librería de utc vendría siendo la encargada para el formateo del Date y así poder estar cambiando su formato y que no crashee, ya que nosotros al momento de editar algo, se realiza en forma de String, pero en nuestro model se espera un objeto Date
import utc from 'dayjs/plugin/utc';
import dayjs from 'dayjs';

// Esto es para ahora sí utilizar bien el formateo de la fecha, ya con esto se podrá usar de manera correcta más abajo
dayjs.extend(utc);

export default function TaskFormPage() {

  // setValue agrega valores a los estados que react hook crea
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  // console.log(createTask());
  const navigate = useNavigate();
  const params = useParams();

  useEffect(()=> {
    // console.log(params);
    async function loadTask() {
      if(params.id) {
        const task = await getTask(params.id)
        console.log(task);
        setValue('title', task.title);
        setValue('description', task.description);
        // Aunque parezca que el formateo es el incorecto por el YYYY-MM-DD es importante dejarlo en este, al momento de imprimirse se realizará de forma correcta, sin embargo si lo corregimos aquí como DD-MM-YYYY no nos responderá la fecha inicial, es decir que solo es para que se consiga reconocer pero para la impresión si se realizará de forma correcta
        setValue('date', dayjs(task.date).utc().format('YYYY-MM-DD'));
      }
    }
    loadTask();
  }, []);

  const onSubmit = handleSubmit((data)=> {
    // createTask(data);
    // navigate('/tasks');

    const dataValid = {
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
    }

    console.log(dataValid);
    
    if (params.id) {
      updateTask(params.id, dataValid);
    } else {
      createTask(dataValid);
    }
    navigate('/tasks');
  });

  return (
    <div className='flex justify-center items-center h-dvh'>

    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
      <form onSubmit={ onSubmit }>

        <label htmlFor='title'>Title</label>
        <input type="text" placeholder='Title' 
          { ...register('title') }
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          // El autoFocus indica que al cargar la página, este input esté seleccionado
          autoFocus
        />

        <label htmlFor='description'>Description</label>
        <textarea rows='3' placeholder='Description'
          { ...register("description") }
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
        ></textarea>

        <label htmlFor='date'>Date</label>
        <input type="date" {...register('date')} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' />

        <button className='w-full bg-indigo-500 px-3 py-2 rounded-md'>
          Save
        </button>
      </form>
    </div>
    </div>
  )
};