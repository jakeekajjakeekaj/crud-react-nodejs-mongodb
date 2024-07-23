// RECORDEMOS QUE NODE NO ENTIENDE LOS import Y export POR DEFECTO, POR LO QUE PARA EVITAR USAR EL require, HAY QUE MODIFICAR NUESTRO PACKAGE.JSON AGREGANDO "type" : "module", ABAJO DE NUESTRO MAIN ARRIBA DEL DEBUG
import express from 'express';

// Inicialización de express, básicamente lo que sería const app vendría siendo nuestro server
const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Server is listening on port ${PORT}...`));