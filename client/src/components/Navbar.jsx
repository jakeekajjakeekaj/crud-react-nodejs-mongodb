import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {

  const { isAuthenticated, logout, user } = useAuth();

  return (
    // <div>Navbar</div>
    <nav className='bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg'>
      <Link to={
        isAuthenticated ? '/tasks' : '/'
      }>
        <h1 className='text-2xl font-bold'>Tasks Manager</h1>
      </Link>
      <ul className='gap-x-2 flex'>
        {isAuthenticated ? (
          // El <> </> es necesario para encerrar dentro código, pero que para usarlo no sea necesario agregar nodos extra, sino así poder agregarle cosas sin que afecte a la estructura ya que de l contrario daría un error
          <>
            <li>Welcome {user.username}</li>
            <li>
              <Link to='/add-task' className='bg-indigo-500 px-4 py-1 rounded-sm'>Add Task</Link>
            </li>
            <li>
              <Link to='/' onClick={()=> logout()}>Log Out</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to='/login' className='bg-indigo-500 px-4 py-1 rounded-sm'>Login</Link>
            </li>

            <li>
              <Link to='/register' className='bg-indigo-500 px-4 py-1 rounded-sm'>Register</Link>
            </li>
          </>
        )
        }
      </ul>
    </nav>
  )
};