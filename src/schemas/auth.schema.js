// El objeto z nos permite crear tipos de datos
import {z} from 'zod';

// VALIDACIONES PARA EL REGISTER
export const registerSchema = z.object({
  username: z.string({
    required_error: 'Username is required'
  }),
  email: z.string({
    required_error: 'Email is required'
  }).email({
    message: 'Invalid email'
  }),
  password: z.string({
    required_error: 'Password is required'
  }).min(6, {
    message: 'Password must be at least 6 characters'
  })
});

// VALIDACIONES PARA EL LOGIN
export const loginSchema = z.object({
  email: z.string({
    required_error: "Email is required"
  }).email({
    message: "Invalid email",
  }),
  password: z.string({
    required_error: "Password is required",
  }).min(6, {
    message: "Password must be at least 6 characters",
  }),
});

// Para poder utilizarlos podriamos irnos a controllers y antes de que se ejecute el register, podemos ejecutar estas validaciones por ejemplo, el problema de eso es que hay que importarlo por cada ruta, es por esto que mejor se creará un middleware nombrado validator.middleware.js