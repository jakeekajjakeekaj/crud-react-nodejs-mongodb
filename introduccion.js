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

// --------- MONGODB -----------

// Ahora debemos tener instalado MONGODB, para esto tenemos que entrar a la web oficial y descargar MONGODB, una vez realizado entramos a la consola y escribimos mongod, si esto no funciona es que tenemos que agregarlo al path, ya que para poder ejecutar mongod tendriamos que estar accediendo a la ruta exacta y eso no acaba siendo muy práctico, es por esto que lo agregamos al path para que así desde cualquier lado podamos acceder al mismo.
// Para esto copiamos la ruta, accedemos a variables de entorno, y en donde dice path le ponemos editar y pegmaos la ruta, ahora solo aceptamos y cerramos todo.
// Ahora al escribir mongod en la consola ya nos reconoce el comando, pero nos sale un error, entonces lo que debemos hacer es crear carpetas en C://data/db

// Ahora indicamos: npm i mongoose
// Este es un módulo que nos permite conectarnos a mongoDB pero también modelar los datos, es decir que le indica a mongoDB que valide antes de que los datos le lleguen.

// Ahora nos dirigimos a db.js e importamos mongoose y realizamos las conexiones, al terminar nos dirigimos al index.js e importamos lo creado en db.js

// *** LA DIFERENCIA ENTRE EXPORT Y EXPORT DEFAULT, es que el export puede exportar múltiples cosas del mismo módulo, y al mandarlo a llamar en un IMPORT, se debe hacer entre {}, mientras que con el EXPORT DEFAULT solo se debe exportar un tipo de dato por módulo y su IMPORT no debe llevar {}. ***

// Una vez ya ejecutemos el comando y ya hayamos conectado a la db.js nos dirigimos a los models y dentro creamos un archivo llamado user.model.js.
// Un modelo es una manera de especificarle a mongoDB qué es lo que se estará guardando. Es muy útil porque mongoDB puede guardar cualquier dato y estos datos no tienen que ser iguales, entonces de no usar este sistema estaríamos muy propensos a cometer errores, por lo que de esta manera es como una manera de crear una tabla para mongoDB.

// --------- REGISTRO DE USUARIOS ---------
// Una vez se llenó el user.model.js comenzaremos con el registro de usuarios, dentro de routes creamos un archivo llamado auth.routes.js, una vez llenemos este archivo con lo necesario para la creación de las rutas, para determinar las funciones y evitar que el mismo archivo se haga muy grande, dentro de controllers, crearemos un archivo llamado auth.controller.js, con esto exportaremos las funciones del enrutamiento y ya después del enrutamiento se conectará hacia nuestra app.js.

// Una vez realizado instalamos THUNDER CLIENT en las extensiones de VSCODE, también podemos utilizar POSTMAN, pero para este caso utilizaremos THUNDER CLIENT y una vez realizado ejecutamos nuestro servidor y probamos las 2 rutas, al ver que efectivamente todo está bien lo que haremos es modificar nuestro enrutamiento para que sea api/login, es por esto que tenemos 2 maneras de realizar esto, o modificar la ruta en cada una de las rutas agregando el api/, o dentro de nuestra app.js, en donde mandamos a llamar a nuestro authRoutes, colocamos: app.use("/api", authRoutes); para así indicar que tiene que llevar api antes de cualquiera de estas rutas

// Una vez finalizado esto y ya testear nuestras rutas, nos vamos a nuestro auth.controller y dentro escribimos el req.body para verificar que la información enviada por el usuario sea enviada de forma correcta, para esto nos dirigimos a nuestro thunder client y en la sección de BODY, dentro de JSON enviamos un JSON como: 
/* 
{
  "hello" : "world"
}
*/

// Ahora al enviar esto no se estará reconociendo el archivo, esto es porque express no reconoce los archivos JSON, para esto debemos utilizar un middleware dentro de app.js, este sería express.json() para así ya poder reconocer el JSON enviado a través del testeo de nuestra ruta y así poder visualizarlo en nuestra consola.

// Una vez testenado que ya funciona la conexión correcta, ya podemos definir el cuerpo de nuestra función register por ejemplo, y a su vez enviar un JSON que respete la obtención de los datos (para este caso email, password y username), y así ya poder obtener los datos que efectivamente se esperan.

// Ahora ya es momento de importar nuestro user.model.js y así definir la estructura que se debe respetar, se crea el nuevo usuario que respete la estructura de nuestro modelado y comprobamos que efectivamente se está almacenando en nuestro backend, esto se comprueba ya que aparte de uqe nos aparece la información, ya se nos está generando un id correspondiente al objeto, sin embargo esto no se ha almacenado en nuestra DB, para guardarlo después de ya tener al objeto guardado, tenemos que escribir a nuestro objeto con el .save() y de esta manera quedará almacenado, sin embargo recordemos la utilización del await ya que esta sería una función asíncrona, por lo tanto también debemos especificar que es una función async

// Una vez finalizado esto, ya podemos ejecutar nuevamente desde nuestro THUNDER CLIENT y ahora sí se almacenará la información en nuestra DB, para poder visualizarla podemos usar el MONGODB COMPASS o una extensión de VSCODE, para esto caso nosotros utilizaremos el COMPASS y de esta manera al ingresar a nuestro mern, ya podremos visualizar a la carpeta users y dentro ya estará almacenada la información.

// Una vez esto recodemos que el timestamps: true, sirve para indicar la fecha y hora de creación y actualización, de igual manera aún faltan otros detalles como el cifrado de la contraseña o evitar una respuesta con tantos datos como el id, ya que en vez de enviar el id sería mejor enviar el token, pero eso ya se verá en la siguiente sección de creación de token

// ------------- CREACION DE TOKEN -------------

// Para la creación de la contraseña cifrada y token, debemos dirigirnos al auth.controller, dentro del mismo como se puede ver estamos almacenando a la password, pero no debemos almacenarla de esta manera, por lo que a través de la consola debemos instalar: "npm i bcryptjs"

// Una vez realizado esto, procedemos a importarla dentro del auth.controller y así mandamos a llamar al algoritmo hash, una vez realizado esto asignamos a password el valor de la respuesta hash, después realizamos un POST y listo, como respuesta podemos visualizar la contraseña ahora sí ya encriptada

// Ahora para evitar que la respuesta nos de todos los datos, solamente modificaremos el res.json dentro del auth.controller para que así solo nos muestre el _id, username, el email, el createdAt y el updatedAt. Estos serán los datos que serán enviados al front.

// Como se dijo, esos serán los datos con los que el front se podrá comunicar, sin embargo necesitamos algo que nos asegure que efectivamente el front ya se había logeado, es por esto que se requiere un token.

// Para esto tenemos que instalar el: "npm i jsonwebtoken", una vez realizado esto, lo que debemos hacer es importarlo y dentro del jwt.sign 

// Posterior a esto comentamos nuestro res.json ya que ya no tendremos la respuesta de todos los datos creados, y ahora crearemos un jwt.sign, de esta manera dentro podremos indicar el payload (lo que contendrá el token), la firma (La clave secreta para los tokens), las opciones (como en cuánto tiempo expirará) y la callback (para indicar la acción a tomar en caso de haber un error o no haberlo).
// Después de esto podemos dejarlo así y enviarlo como res.json({ token }), el problema de esto es que ahora del lado del front podrá ser un poco más laborioso el trabajar con los tokens de esta manera; por lo que gracias a un método que contiene EXPRESS, podremos pasarlo a través de una cookie como: res.cookie('variable', token); y así podremos enviarlo como una cookie y de esta manera facilitar el lado front.
// **** COMO DATO EXTRA, AHORA LA RESPUESTA SOLO DICE QUE LA COOKIE SE ENVIÓ DE FORMA CORRECTA, SIN EMBARGO YA NO PODEMOS VER MÁS INFORMACIÓN, PUES SI NOS VAMOS A LOS HEADERS O A LA PROPIA COOKIE EN NUESTRO THUNDER CLIENT PODEMOS VER EL TOKEN DE LA COOKIE, PEGARLO EN LA PÁGINA DE JWT Y ASÍ PODER VISUALIZAR LA INFORMACIÓN SIN NINGÚN PROBLEMA ****

// Ahora solo mejoraremos la organización, crearemos un nuevo archivo dentro de la carpeta libs llamado jwt.js, ahí pegaremos todo lo del json web token para así mandarlo a llamar a través de una importación y dentro del auth.controller solamente mandar la cookie; así mismo dentro del archivo config.js alojado en nuestro src, colocaremos el valor de la FIRMA (PALABRA CLAVE) para que así se use como variable y no poder ser modificable en el jwt.js

// --------- LOGIN -------------
