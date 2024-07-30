import { Router } from 'express';
// Esta importación son las funciones que tendrán las rutas, peo ubicadas en otro archivo para evitar que este archivo se haga muy grande
import { register, login } from '../controllers/auth.controller.js';

// De esta manera podemos crear diferentes rutas (post, put, delete y así)
const router = Router();

// Definiendo la ruta y mandando a llamar a la función importada, si queremos que lleve api antes, podemos modificar cada una de las rutas para que sea '/api/register' o nos podemos dirigir a app.js y hacerlo desde ahí para todas
router.post('/register', register);
router.post('/login', login);

// Se exporta el enrutamiento para ser usado en nuestra app.js
export default router;