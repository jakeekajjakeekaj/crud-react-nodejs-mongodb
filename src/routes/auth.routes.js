import { Router } from 'express';
// Esta importación son las funciones que tendrán las rutas, peo ubicadas en otro archivo para evitar que este archivo se haga muy grande
import { 
  register, 
  login, 
  logout, 
  profile,
  verifyToken
} from '../controllers/auth.controller.js';
import { authRequired } from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { registerSchema, loginSchema } from '../schemas/auth.schema.js';

// De esta manera podemos crear diferentes rutas (post, put, delete y así)
const router = Router();

// Definiendo la ruta y mandando a llamar a la función importada, si queremos que lleve api antes, podemos modificar cada una de las rutas para que sea '/api/register' o nos podemos dirigir a app.js y hacerlo desde ahí para todas
router.post('/register', validateSchema(registerSchema), register);
router.post('/login', validateSchema(loginSchema), login);
router.post('/logout', logout);

router.get('/verify', verifyToken);

// Al indicar 2 funciones, se indica que primero debe pasar por una función y después pasa a la otra
router.get('/profile', authRequired, profile);

// Se exporta el enrutamiento para ser usado en nuestra app.js
export default router;