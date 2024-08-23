// rfc crea un compoennte básico de REACT
import React from 'react'
// Trae el hook useForm de la librería previamente instalada react hook form
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext.jsx';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function RegisterPage() {

  // useForm es bastante utilizado para le manejo de formularios de REACT, esto sería con react-hook-form y básicamente se utiliza la desestructuración para así obtener que register se usado para manjear los registros del usuario, como su estado, valor, validación
  // handleSubmit verifica la acción a tomar en caso de que el código pase de forma correcta, es decir al hacer click en enviar formulario por ejemplo
  // formState: { errors } verifica el estado del formulario, pero no solo eso ya que gracias el errors, podemos visualizar si existe algún tipo de error y así poderlo mostrar en pantalla de forma simple
  const { register, 
    handleSubmit, 
    formState: { errors },
  } = useForm();
  // al errors se le renombra como RegisterErrors ya que llamamos errors también a nuestro formState, pero igual debemos manejarlo por lo modificado con el AuthContext.jsx y así no generar un conflicto por el nombre
  const { signup, /*user*/ isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  // console.log(user);

  const onSubmit = handleSubmit(async (values)=> {
    signup(values);
  });

  useEffect(()=> {
    if(isAuthenticated) navigate('/tasks');
  }, [isAuthenticated]);

  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
      <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
        {
          registerErrors.map((error, i)=> (
            <div className='bg-red-500 p-2 text-white my-2' key={i}>
              { error }
            </div>
          ))
        }

        <h1 className='text-3xl font-bold my-2'>Register</h1>

        {/* // <div>RegisterPage</div>
        // Se puedes manejar los eventos del formulario, para que cuando el usuario tipee se guarde en un estado o las propias validaciones del front, sin embargo ya existen librerías que se encargan de eso y nos evita tener que hacer todo por nuestra cuenta, para este caso utiizaremos un módulo llamado 'react hook form', el cuál se encarga de decirle a react que tenemos un formulario que se encarga tanto de manejar el cambio de estado, como de validaciones */}
        <form 
          onSubmit={onSubmit}
        >
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

          {/* errors.username verifica si se contiene algún error escrito dentro, mientras que los operadores && verifican true o false respecto a si se contiene algo en errors.username, es así como salta o no salta el mensaje de error */}
          {
            errors.username && (
              <p className='text-red-500'>
                Username is required
              </p>
            )
          }

          {/* <input type="email" name='email' /> */}
          <input type="email"
            { ...register('email', { required: true }) }
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
            placeholder='Email'
          />

          {
            errors.email && (
              <p className='text-red-500'>
                Email is required
              </p>
            )
          }

          <input type="password"
            { ...register('password', { required: true }) }
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
            placeholder='Password'
          />

          {
            errors.password && (
              <p className='text-red-500'>
                Password is required
              </p>
            )
          }

          <button type='submit'
            className='bg-sky-500 text-white px-4 py-2 rounded-md my-2'
          >
            Register
          </button>
        </form>

          <p className='flex gap-x-2 justify-between'>
              Already have an account? <Link to='/login' className='text-sky-500'>Login</Link>
          </p>
      </div>
    </div>
  )
};