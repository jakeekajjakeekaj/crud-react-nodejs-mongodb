import React from 'react';
// El componente BrowserRouter es el que se encargará de englobar a todo, es decir que se encargar de que la URL esté sincroniada con la interfaz y así simular un enrutamiento natural, Routes indicaría la utilización de Route, es decir que dentro de este servirá como un contenedor para Route encargándose de que solo una ruta coincida y renderice según la URL actual y con Route estaremos manejando la ruta y el componente a renderizar.
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import RegisterPage from './pages/RegisterPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import TasksPage from './pages/TasksPage.jsx';
import TaskFormPage from './pages/TaskFormPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import HomePage from './pages/HomePage.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />

          <Route element={ <ProtectedRoute /> }>
            <Route path='/tasks' element={<TasksPage />} />
            <Route path='/add-task' element={<TaskFormPage />} />
            <Route path='/tasks/:id' element={<TaskFormPage />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Route>
        </Routes>
        {/* <div className='text-4x1 font-bold'>Hola Mundo</div> */}
      </BrowserRouter>
    </AuthProvider>
  )
};

export default App;