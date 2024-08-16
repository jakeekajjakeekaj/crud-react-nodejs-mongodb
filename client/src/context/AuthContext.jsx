import { createContext, useState, useContext, useEffect } from 'react';
import { registerRequest, loginRequest } from '../api/auth.js';

export const AuthContext = createContext();

export const useAuth = ()=> {
  const context = useContext(AuthContext);
  if(!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children })=> {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Está en null porque no hay errores al inicio
  const [errors, setErrors] = useState([]);

  const signup = async (user)=> {
    try {
      // console.log(values);
      const res = await registerRequest(user)
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
    }
    catch (error) {
      // console.log(error);
      console.log(error.response);
      setErrors(error.response.data);
    }
  };

  const signin = async (user)=> {
    try {
      const res = await loginRequest(user);
      console.log(res);
    } catch (error) {
      // console.log(error);
      // Array sería para los arreglos, esto se realiza de esta manera ya que el error no es recibido como objeto y nosotros esperamos recibirlo de esta manera debido a los métodos utilizados, por lo que de esta manera conseguirmos obtenerlo como arreglo
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      // setErrors(error.response.data);
      setErrors([error.response.data.message]);
    }
  };

  // Timer para los mensajes de error, es decir el tiempo que etará presente el anuncio de error en caso de haber alguno
  useEffect(()=> {
    if(errors.length > 0) {
      const timer = setTimeout(()=> {
        setErrors([])
      }, 5000)
      return ()=> clearTimeout(timer)
    }
  }, [errors])

  return (
    <AuthContext.Provider 
    value={{
      signup,
      signin,
      user,
      isAuthenticated,
      errors
    }}>
      {children}
    </AuthContext.Provider>
  )
}