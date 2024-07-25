// RECORDEMOS QUE NODE NO ENTIENDE LOS import Y export POR DEFECTO, POR LO QUE PARA EVITAR USAR EL require, HAY QUE MODIFICAR NUESTRO PACKAGE.JSON AGREGANDO "type" : "module", ABAJO DE NUESTRO MAIN ARRIBA DEL DEBUG
import express from 'express';
// morgan es usado para ver las peticiones que nos lleguen al servidor
import morgan from 'morgan';

// Inicialización de express, básicamente lo que sería const app vendría siendo nuestro server
const app = express();

// la configuración 'dev' es para que nos muestre un mensaje corto por consola
app.use(morgan('dev'));

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, ()=> console.log(`Server is listening on port ${PORT}...`));

export default app;