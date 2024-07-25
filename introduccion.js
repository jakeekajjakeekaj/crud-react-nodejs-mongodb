// La diferencia entre usarn MONGODB y MYSQL que fue como en el proy pasado, es que MONGODB a diferencia de MYSQL, MONGODB usa JSON para sus consultas y creación, mientras que MYSQL si usa SQL, dicho esto MYSQL serían DB relacionales, mientras que con MONGODB sería no relacionales; las ventajas y diferencias de usar uno y otro son:
// MYSQL:
// Mayormente es usada para e-commerce, web típicas, cosas con estructurado fuerte en donde las cosas se deben mostrar más como tablas y estas tablas van relacionadas entre si, su DESVENTAJAS es que tienden a hacerse más lentas entre más información haya y es por esto que entran técnicas más complejas para la optimización de la DB, su escalabilidad y flexibilidad juegan en contra.

// MONGODB:
// Mayormente usada para aplicaciones móviles, big data, y básicamente cosas que no necesiten de una fuerte relación entre las tablas, es por esto que es flexible y escalable, su manera de crear es muy flexible gracias a que son más como arreglos JSON, y funcionan bien con mucha información, el problema es que la complejidad de las consultas tienden a ser más complejas entre más peticiones.

// DICHO ESTO, POR EJEMPLO SI SE QUIERE UN E-COMMERCE TAN GRANDE COMO AMAZON, SE PUEDEN INTEGRAR AMBAS TECNOLOGÍAS, POR EJEMPLO Para un e-commerce a gran escala y con características similares a Amazon:

// + Uso Combinado (Políglota): Considera usar ambos. Puedes utilizar MongoDB para manejar el catálogo de productos y datos flexibles, mientras que MySQL puede gestionar las transacciones financieras y los datos críticos que requieren integridad y consistencia.

// + MongoDB: Puede ser una excelente opción para la parte del catálogo de productos debido a su flexibilidad y escalabilidad.

// + MySQL: Ideal para la parte de transacciones y gestión de usuarios donde la integridad de los datos es crítica.

// En resumen, la elección depende de tus necesidades específicas y del tipo de operaciones que priorizas. Muchos grandes e-commerce utilizan una combinación de diferentes tecnologías de bases de datos para aprovechar las fortalezas de cada una.

// Listo, ahora creamos una carpeta src, aparte de agregar el .gitignore, el README, y subir el proy a github; ahora creamos un proyecto npm, con "npm init", al crearlo y ya tener nuestro package.json podemos instalar las librerías, para este caso sería "npm i express"

// Una vez finalizado creamos nuestro app.js dentro de src
// Una vez finalizado este paso, ya creando de manera breve nuestro server express dentro de app.js y a su vez modificando nuestro package.json con "type" : "module" para así evitar usar el require; podemos ejecutar nuestro servidor con node src/app.js

// Ahora dentro de src vamos a crear todas las carpetas que necesitaremos a futuro:
// routes: Nos sirve para crear las URL del backend, es decir se crearán todos los end points o rutas que el front end puede pedir.
// controllers: Nos sirve para crear funciones que se van a necesitar cuando se ejecute una URL.
// models: Para poder gurdar los modelos de datos de nuestra DB (Es decir crearemos esquemas).
// middlewares: Nos sirve para poder decir las rutas protegidas por usuarios autenticados.
// schemas (también se puede llamar validators): Básicamente es para hacer validaciones del lado del servidor para determinar la acción en caso de recibir un tipo de dato no esperado (PARA ESTE CASO EN VEZ DE LLAMARSE VALIDATORS FUE LLAMADO SCHEMA PORQUE SE USARÁ UNA BIBLIOTECA LLAMADA SOFT Y CREA ESQUEMAS).
// libs: Sirve para poder reescribir código que podemos importar varias veces
// db.js: Que vendría siendo la DB
// config.js: Crea configuraciones que el resto de archivos pueda utilizar, por ejemplo un PUERTO o VARIABLE como el SECRET que utilizan los tokens, pues aquí se podrán configurar.
// index.js: Arranca la aplicación, llama el código de express, llama a la DB, los servicios

// Dicho esto, ahora se modificará al app.js y al index.js, porque el app.js se usará mayormente para el lado backend mientras que el index.js será usado para realizar todas las conexiones, es por esto que del app.js se exportará para así inicializar el archivo con index.js


// *** DATO INTERESANTE: SI NOSOTROS IMPORTAMOS MÓDULOS PROPIOS, DEBEMOS INCLUIR LA EXTENSIÓN ('./app.js'), PERO SI ES DE TERCEROS NO HACE FALTA INCLUIR LA EXTENSIÓN ('express'). ***

// Ahora si nosotros ejecutamos en consola: node src/index.js ya podemos iniciliazar nuestro servidor

// Ahora para evitar estar reiniciando el servidor a cada rato, podemos instalar nodemon: npm i nodemon -D 
// -D indica que se guardará en las Devdependencies dentro de package.json, es decir que se instalará de manera local durante el desarrollo pero ya no para el deploy.

// Ahora dentro de package.json incluimos dentro de scripts el código para poder ejecutar nuestro nodemon:
/* 
  "scripts": {
  "dev" : "nodemon src/index.js"
  },
*/
// Creado esto, ya después basta con ejecutar npm run dev para ejecutar nuestro servidor.

// Ahora se instalará un módulo para ir visualizando las peticiones que vayan llegando al backend, este módulo se llama MORGAN: npm i morgan
// Después de esto nos dirigimos a app.js e importamos morgan junto con todo lo demás.
// Una vez que morgan ya quedó bien configurado en nuestro app.js, al inicializar nuestro server de momento sin nada que se pueda obtener, al estar recargando la página y eso, ya podremos estar visualizando en consola las peticiones realizadas, para este caso al tener nada, nos está dando un GET con el código 404.
// GET / 404 7.741 ms - 139
// peticion | codigo http | tiempo en ms | peso en bytes

// MONGODB

// Ahora debemos tener instalado MONGODB, para esto tenemos que entrar a la web oficial y descargar MONGODB, una vez realizado entramos a la consola y escribimos mongod, si esto no funciona es que tenemos que agregarlo al path, ya que para poder ejecutar mongod tendriamos que estar accediendo a la ruta exacta y eso no acaba siendo muy práctico, es por esto que lo agregamos al path para que así desde cualquier lado podamos acceder al mismo.
// Para esto copiamos la ruta, accedemos a variables de entorno, y en donde dice path le ponemos editar y pegmaos la ruta, ahora solo aceptamos y cerramos todo.
// Ahora al escribir mongod en la consola ya nos reconoce el comando, pero nos sale un error, entonces lo que debemos hacer es crear carpetas en C://data/db

// Ahora indicamos: npm i mongoose
// Este es un módulo que nos permite conectarnos a mongoDB pero también modelar los datos, es decir que le indica a mongoDB que valide antes de que los datos le lleguen.

// Ahora nos dirigimos a db.js e importamos mongoose y realizamos las conexiones, al terminar nos dirigimos al index.js e importamos lo creado en db.js

// *** LA DIFERENCIA ENTRE EXPORT Y EXPORT DEFAULT, es que el export puede exportar múltiples cosas del mismo módulo, y al mandarlo a llamar en un IMPORT, se debe hacer entre {}, mientras que con el EXPORT DEFAULT solo se debe exportar un tipo de dato por módulo y su IMPORT no debe llevar {}. ***

// Una vez ya ejecutemos el comando y ya hayamos conectado a la db.js nos dirigimos a los models y dentro creamos un archivo llamado user.model.js.
// Un modelo es una manera de especificarle a mongoDB qué es lo que se estará guardando. Es muy útil porque mongoDB puede guardar cualquier dato y estos datos no tienen que ser iguales, entonces de no usar este sistema estaríamos muy propensos a cometer errores, por lo que de esta manera es como una manera de crear una tabla para mongoDB.

// Una vez se llene el archivo, 