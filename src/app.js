// RECORDEMOS QUE NODE NO ENTIENDE LOS import Y export POR DEFECTO, POR LO QUE PARA EVITAR USAR EL require, HAY QUE MODIFICAR NUESTRO PACKAGE.JSON AGREGANDO "type" : "module", ABAJO DE NUESTRO MAIN ARRIBA DEL DEBUG
import express from 'express';
// morgan es usado para ver las peticiones que nos lleguen al servidor
import morgan from 'morgan';

// cookieParser es usado como middleware para poder acceder a la información de las cookies
import cookieParser from 'cookie-parser';

// Importar el enrutamiento creado
import authRoutes from './routes/auth.routes.js';

import taskRoutes from './routes/tasks.routes.js';

// Inicialización de express, básicamente lo que sería const app vendría siendo nuestro server
const app = express();

// la configuración 'dev' es para que nos muestre un mensaje corto por consola
app.use(morgan('dev'));

// De esta manera express ya nos podrá estar reconociendo los archivos JSON ya que de manera predeterminada no los suele reconocer
app.use(express.json());

// De esta manera indicamos el uso del middleware dentro de nuestra aplicación, es como el express, pero para las cookies
app.use(cookieParser());

// Para indicar que siempre tiene que llevar '/api' antes de cualquiera de las rutas, lo indicamos desdde aquí como: '/api', authRoutes
app.use('/api', authRoutes);
app.use('/api', taskRoutes);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, ()=> console.log(`Server is listening on port ${PORT}...`));

export default app;