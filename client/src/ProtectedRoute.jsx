import React from 'react';
import { useAuth } from './context/AuthContext';
// Outlet es como decir "del componente que está dentro", es decir que continúe con el componente que se encuentra dentro
import { Navigate, Outlet } from 'react-router-dom';

// El componente se encuentra de App.jsx, pero de igual manera se encuentra dentro de un AuthProvider, por lo tanto también tiene acceso al contexto
export default function ProtectedRoute() {
  // De esta manera utilizamos a las const contenidas dentro del useAuth de nuestro AuthContext
  const { loading, isAuthenticated } = useAuth();
  // console.log(loading, isAuthenticated);

  if (loading) return <h1>
    Loading...
  </h1>
  if (!loading && !isAuthenticated) return <Navigate to='/login' replace />

  return (
    // <div>ProtectedRoute</div>
    <Outlet />
  )
};