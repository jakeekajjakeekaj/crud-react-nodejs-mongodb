import React from 'react';
// El componente BrowserRouter es el que se encargará de englobar a todo, es decir que se encargar de que la URL esté sincroniada con la interfaz y así simular un enrutamiento natural, Routes indicaría la utilización de Route, es decir que dentro de este servirá como un contenedor para Route encargándose de que solo una ruta coincida y renderice según la URL actual y con Route estaremos manejando la ruta y el componente a renderizar.
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importación de los componentes creados por nosotros
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Home Page</h1>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/tasks' element={<h1>Tasks Page</h1>} />
          <Route path='/add-task' element={<h1>New Task</h1>} />
          <Route path='/tasks/:id' element={<h1>Update Task</h1>} />
          <Route path='/profile' element={<h1>Profile</h1>} />
        </Routes>
        <div className='text-4x1 font-bold'>Hola Mundo</div>
      </BrowserRouter>
    </AuthProvider>
  )
};

export default App;