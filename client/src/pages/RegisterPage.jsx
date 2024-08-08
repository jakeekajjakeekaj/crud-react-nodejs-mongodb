// rfc crea un compoennte básico de REACT
import React from 'react'
// Trae el hook useForm de la librería previamente instalada react hook form
import { useForm } from 'react-hook-form';

export default function RegisterPage() {

  const { register, handleSubmit } = useForm()

  return (
    <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
      {/* // <div>RegisterPage</div>
      // Se puedes manejar los eventos del formulario, para que cuando el usuario tipee se guarde en un estado o las propias validaciones del front, sin embargo ya existen librerías que se encargan de eso y nos evita tener que hacer todo por nuestra cuenta, para este caso utiizaremos un módulo llamado 'react hook form', el cuál se encarga de decirle a react que tenemos un formulario que se encarga tanto de manejar el cambio de estado, como de validaciones */}
      <form onSubmit={handleSubmit(values=> {
        console.log(values);
      })}>
        {/* <input type="text" name='username' /> */}
        {/* '...' indica operador de progpagación, es decir que los atributos que tendrá la función se asignarán automáticamente, en vez de escribir todo de forma manual, es decir que para la función register se asigna automáticamente onChange, onBlur y ref
        'register' sería una función proporcionada por react hook form que se utiliza para registrar un campo de entrada, permitiendo el control del estado de campo, la validación y la recolección de datos 
        'username' vendría siendo el nombre del campo
        'required: true' vendría siendo si es requerido dicho campo para así no permitir un estaod vacío */}
        {/* Se vería como abajo sin el operador de progpagación '...', como podemos observar el código es más legible gracias al operador de propagación */}
        {/* <input 
              type="text" 
              onChange={register('username', {required: true}).onChange}
              onBlur={register('username', {required: true}).onBlur}
              ref={register('username', {required: true}).ref}
            /> 
        */}
        <input type="text"
          { ...register('username', {required: true}) }
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          placeholder='Username'
        />
        {/* <input type="email" name='email' /> */}
        <input type="email"
          { ...register('email', { required: true }) }
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          placeholder='Email'
        />
        <input type="password"
          { ...register('password', { required: true }) }
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          placeholder='Password'
        />
        <button type='submit'>
          Register
        </button>
      </form>
    </div>
  )
};