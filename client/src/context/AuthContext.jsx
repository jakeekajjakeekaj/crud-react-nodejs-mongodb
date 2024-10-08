import { createContext, useState, useContext, useEffect } from 'react';
import { registerRequest, loginRequest, verifyTokenRequest } from '../api/auth.js';
import Cookies from 'js-cookie';

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
  const [loading, setLoading] = useState(true);

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
      setIsAuthenticated(true);
      setUser(res.data);
    } catch (error) {
      // console.log(error);
      // Array sería para los arreglos, esto se realiza de esta manera ya que el error no es recibido como objeto y nosotros esperamos recibirlo de esta manera debido a los métodos utilizados, por lo que de esta manera conseguirmos obtenerlo como arreglo
      console.log(error);
      // if (Array.isArray(error.response.data)) {
      //   return setErrors(error.response.data);
      // }
      // setErrors(error.response.data);
      // setErrors([error.response.data.message]);
    }
  };

  const logout = ()=> {
    Cookies.remove('token');
    setIsAuthenticated(false);
    setUser(null);
  }

  // Timer para los mensajes de error, es decir el tiempo que etará presente el anuncio de error en caso de haber alguno
  useEffect(()=> {
    if(errors.length > 0) {
      const timer = setTimeout(()=> {
        setErrors([])
      }, 5000)
      return ()=> clearTimeout(timer)
    }
  }, [errors])

  useEffect(()=> {
    async function checkLogin () {
      const cookies = Cookies.get();
      // console.log(cookies);
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        setUser(null);
        return;
      }
      // console.log(cookies.token);
      try {
        const res = await verifyTokenRequest(cookies.token);
        // console.log(res);
        if(!res.data) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }

        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider 
    value={{
      signup,
      signin,
      logout,
      loading,
      user,
      isAuthenticated,
      errors
    }}>
      {children}
    </AuthContext.Provider>
  )
}