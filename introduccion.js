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
// Para el login se hace la respectiva función dentro de auth.controller, así mismo en esta sección se mejoró a nuestro createAccessToken del jwt.js dentro de libs para generar de manera correcta los tokens; y se agregó la ruta de login dentro de auth.routes.js contenido en la carpeta de routes

// ----------- LOGOUT -----------
// El mismo proceso para el LOGIN se hace dentro del 

// ---------- VALIDAR TOKEN ----------
// Para esto se crea la ruta en auth.routes, después de esto se crea en middlewares con nuevo archivo llamado validateToken.js, esto porque primero pasará por una función de validación antes de la función "buena", dicho esto dentro del validateToken para poder estar trabajando con el respectivo token, debemos trabajar con las cookies, y es por esto que también tenemos que instalar una nueva librería: "npm i cookie-parser"

// Una vez que ya se pueda leer la cookie, ahora si ya podemos proceder con el token, para así acabar de crear nuestra función profile junto con su enrutamiento; al finalizar esto podemos hacer las pruebas, estas son primero logearnos y ver que todo esté bien al pasar a ver el profile con GET, desoués nos ponemos en logout con POST y de esta manera ahora sí ya no quedará ningún token registrado, posterior a esto si colocamos nuevamente un porfile con GET ahora sí nos aparece que no se tiene ningún token y no es posible mostrar los datos correspondientes.

// **** Ahora si nosotros queremos colocar nuevas rutas no hay ningún problema, lo que en este caso se hizo fue primero en la carpeta de routes se creó un nuevo archivo llamado tasks.routes.js, posterior a esto se crearon las corrspondientes instrucciones para así finalizar exportando la función e importarla dentro de nuestra app.js, de esta manera también mandamos a llamar a la función dentro del app.js, cabe mencionar que aquí también utilizamos la función de authRequired.js por lo que también tenemos que importar el authRequired de nuestro validateToken.js dentro de nuestra carpeta de middlewares, es así como al realizar una petición get con esta nueva ruta creada ahora para la task, no podremos acceder si no estamos logeados y así protegemos a nuestro backend ****

// --------- TASKS CRUD ---------
// Para emoezar dentro de la carpeta de routes creamos un archivo llamado tasks.routes.js, posterior a esto dentro de controllers también creamos un archivo llamado tasks.controller.js, posterior a esto dentro de models creamos un archivo llamado task.model.js y llenamos los archivos respectivamente; una vez definidas las rutas dentro del routes y las funciones dentro del controllers, ahora sí podemos probarlas, nos dirigimos a nuestro Thunder Client y dentro nos logeamos
/*
{
  "email": "test11@example.com",
  "password": "test11"
}
*/
// y probamos con una petición GET .../api/tasks, con esto nos arrojará un areglo vacío pero vamos viendo que todo está funcionando, ahora sobre la misma ruta hacemos un POST y escribimos:
/* 
{
  "title": "Mi primer tarea",
  "description": "Descripcion 1"
}
*/
// Y podemos observar que la tarea se ha creado, sin embargo hasta ahorita no tenemos linkeada la tarea creada con el usuario logeado, por lo que ahora haremos eso.

// Para esto dentro del task.model agregaremos al user y escribimos el dato que es, no solo eso sino que ahora debemos dirigirnos a task.controller y en la newTask debemos agregar de igual manera al user, al acabar esto ahora si al elegir la misma ruta pero con el POST ahora sí se almacena en el respectivo usuario

// Sin embargo ahora al hacer el GET de la ruta de tasks, nos trae todas las tareas en vez de únicamente las del usuario, dicho esto ahora lo que haremos es dentro de tasks.controller.js, en la función de getTasks y dentro de la función del Task.find, escribimos como parámetro user: req.user.id y así indicamos solo las tareas que correspondan con el usuario logeado. Ahora al indicar la ruta tasks con GET ahora sí solo nos trae las tareas del usuario correspondiente, agregamos el populate('user') en el tasks.controller y listo, ahora podemos viauslaizar las tareas correspondientes con el usuario y aparte visualizar la información del usuario gracias al populate

// Ahora ya podemos probar todo y ver que ya todo está correcto, es decir para la eliminación, creación, edición y lectura de las tasks (CRUD), hasta aquí ya podemos proceder con el front, sin embargo procederemos con las validaciones.

// -------- VALIDACIÓN DE DATOS --------

// En esta sección lo que se hará que validar los datos, es decir que cada que lleguen datos del lado del cliente, vamos a compararlos con un esquema que crearemos para así definir si es correcto o no lo que nos han pasado, para así deja continuar al cliente o por el contrario indicarle que hubo un error.

// Para esto trabajaremos dentro de la carpeta Schemas, y a su vez utilizaremos biblioteas extras, ya que aunque se puee hacer manualmente con Node, ya existen muchas bibliotecas que nos ayudan a validar datos.
// express-validator (módulo express para validar datos)
// npm joi (Antes pertenecía a happy, un módulo alternativo a express, pero luego se dividió y ya es posible de usar con cualquier framework practicamente)
// zod npm (nos permite crear una especie de esquema como con mongoose)

// Para este caso utilizaremos zod npm, se recomienda entrar a la web y leer la documentación
// npm i zod
// y ahora dentro de schemas crearemos un archivo llamado auth.schema.js y dentro importamos zod

// Ahora una vez acabados los esquemas, podremos mandar a llamar las funciones, una manera de hacerlo es que en controllers antes de que se haga el register por ejemplo, que siempre se pase primero por la validaión, el único problema es que esto se tendria que estar repitiendo para todas las direcciones, por lo que se creará un archivo en middlewares llamado validator.middleware.js y una vez declarado todo dentro de este, nos dirigimos a auth.routes.js e importamos tanto el validateSchema el middleware, como el registerSchema y loginSchema de los schemas, para así comenzar a trabajarlos en las rutas. De esta manera antes de ejcutar alguna función como register por ejemplo, primero llamaremos a nuestro middleware pasándole al esquema y si todo coincide básicamente verificando el req.body, ahora sí podremos interpretar que todo está correcto para proceder con el register o por el contrario manejar el error.

// Procederemos a verificar que todo está crrecto, por lo que a través del THUNER CLIENT enviaremos un POST al register pero con el cuerpo vacío, si todo está correcto nos debería de arrojar un error de Zod bastante extenso, por esto mismo modificaremos el middleware para que en vez de que nos muestre error y nos aparezca todo, solo le indicaremos lo que deseamos; ahora ya nos aparecen los mensajes que deben de ir y procedemos a realizar validaciones, por ejemplo en el register si escribimos un email "123" nos indicará que el email es inválido, si colocamos bien el email pero no colocamos todo lo demás, nos indicará que se requiren el username y la password, si solo escribimos un número, nos indicará que se espera un string, y lo mismo para la contraseña con su longitud.

// Para el login el funcionamiento vendría siendo lo mismo

// Ahora también se podría crear un esquema para las tareas, para esto nos dirigimos a los schemas y creamos el archivo task.schema.js, importamos ZOD y con esto creamos el esquema esperado para las validaciones, una vez finalizado ya nos dirigimos a nuestras routes con el tasks.routes.js y dentro ahora sí procedemos a importar al middleware y al esquema que acabamos de crear para las tareas, una vez que lo mandamos a llamar podemos probarlo indicando la ruta tasks con POST y ahora sí, si no colocamos nada en el cuerpo, nos indicará que el título es requrido, lo mismo para el caso de la descripción, con esto finalizado se podría decir que ya terminamos el back, ahora procederemos con la configuración del cliente

// ---------- CONFIGURACIÓN DEL CLIENTE ----------

// Ahora comenzaremos con la configuración de lo que vendría siendo el cliente, es decir comenzaremos con el frontend

// Para este caso utilizaremos VITE, por lo que escribimos "npm create vite", colocamos un nombre, para este caso elegimos "client", seleccionamos React, elegimos JavaScript.

// Una vez creado entramos "cd client", ya dentro escribimos "npm install", después escribimos "npm run dev" para ejecutar el servidor y tmbién ejecutamos "npm run dev" dentro de client así como se indica en las instrucciones de la consola.

// Ahora al abrir el navegador, si nosotros escribimos localhost:3000 podemos acceder a lo que sería el back, mientras que si escribimos localhost:5173 que es lo que se indica en la consola, podemos acceder al lado front

// Ahora procederemos a limpiar un poco ya que se tiene código de ejemplo, para esta entramos a client y en App.jsx quitamos todo y agregamos un código básico, podemos eliminar el App.css ya que ya no se está utilizando más, de igual manera eliminamos todo el código de index.css y el main.jsx lo dejamos igual.

// Ahora para este caso, utilizaremos tailwind para el estilizado, por lo que nos dirigimos a la web y buscamos tailwind, entramos en getstartes, framework guides y seleccionamos la de Vite, ya dentro nos indicará la manera en que se instalará, para este caso hay que escribir en la consola del front, "npm install -D tailwindcss postcss autoprefixer", lo cual instalará a tailwind con estos 3 módulos, es decir tailwindcss, postcss y autoprefixer. Ahora escribimos en la consola "npx tailwindcss init -p" lo cual nos creará 2 nuevos archivos, un postcss.config.js y un tailwind.config.js
// Ahora dentro de tailwind.config.js entramos y modificaremos el archivo, para este caso copiamos el content que viene en la documentación y lo pegamos, con eso lo que decimos es que cualquier archivo que esté dentro de index.html y src que trmine en js, ts, jsx y tsx va a poder tener la clase de tailwind; así mismo se recomienda tener la extención de tailwind para VSC llamada "Tailwind CSS IntelliSense" y es del mismo tailwind labs para así poder tener autocompletado.

// Para finalizar en la misma docuemtnación nos indica que dentro del index.css agreguemos las clases indicadas, una vez pegado ya tenemos configurado tailwind, para probarlo podemos dentro de App.jsx escribimos el h1 con una className="text-4x1 font-bold" y al ver que efectivamente se modifica, podemos ver que efectivamente ya está instalado y bien configurado tailwind.

// Ahora dentro del index.css escribimos un poco de más codigo en un body para así poder elegir el fondo del color y el color de letra.

// Ya para finalizar se crearán varias páginas, para crear páginas en React generalmente se utiliza la bibliotecta React Router Dom, la cual sirve para simular el enrutado desde el frontend, por lo que nos metemos a su página, nos dirigimos en getting started y dentro de Tutorial buscamos cómo instalarlo, lo que nos indica que sería "npm i react-router-dom", una vez que lo instalamos a través de la consola, escribimos npm run dev nuevamente y ahora lo configuraremos

// Dentro de App.jsx importamos el react-router-dom y escribimos código, de esta manera gracias a la previa instalación de ract router dom, ya podemos simular el enrutamiento en el lado del front y así al finalizar todo con la utilización rápida de BrowserRouter, Routes y Route; es así como al escribir las diferentes rutas en nuestra URL ahora si debería de estar cambiando el mensaje ya que eso fue lo que indicamos que debería de pasar.

// ---------- REGISTRO DE USUARIOS ----------

// Para esta parte nos dirigimos a src y creamos una carpeta llamada pages, otra llamada components y otra llamada context.

// Dentro de pages crearemos un RegisterPage.jsx y también un LoginPage.jsx, una vez creados estos con un rfc (crear componentes React de forma predeterminada), lo que haremos srá dirigirnos a App.jsx y dentro importaremos e insertaremos los componentes en las rutas pertenecientes.

// Ahora comenzaremos a crear el componente de RegisterPage.jsx, para este aparte de crear un componente utilizaremos una librería llamada "REACT HOOK FORM", esta nos ayudará a manejar los cambios de estado y las validaciones del laso del front y así nos evita tener uqe hacerlo todo; para su utilización tenemos que ir a la página principal, seleccionamos el get started y vemos las instrucciones de instalacón, para este caso escribimos en la consola "npm i react-hook-form". Una vez instalado ya podemos utilizarlo, ejecutamos el lado front e importamos el módulo dentro del componente RegisterPage.jsx. Al finalizar ya podemos comprobar su funcionamiento para la dirección de register y vemos que todo va correcto

// Hasta ahorita en la URL de register, nosotros ya podemos registrar y se muestra en consola, pero esto no registra en nuestra DB, para esto necesitamos usar peticiones para el backend utilizando Fetch, para este ejemplo como una manera más simple se usará Axios, aparte de que la mayor ventaja que tiene Fetch es que es ligero y más flexible, sin embargo en la mayoría de los casos se usará y es preferible usar Axios.
// Para esto se instalará "npm i axios" dentro de client
// Al tenerlo instalado ya podemos importarlo dentro de auth.js.
// Una vez acabemos el código de auth.js y lo importemos dentro de RegisterPage.jsx, si nosotros intentamos realizar una petición tendremos un error, esto será por el CORS, dicho esto existen varias maneras de solucionarlo, lo que se hará para esta ocasión es ir al backend e instalaremos "npm i cors", este módulo nos permitirá configurar cors de forma sencilla, una vez finalizado lo importamos dentro de app.js y ahí dentro insertamos código, una vez listo ya podemos realizar peticiones.

// Una vez mejorado un poco el código, se usará el contexto, el contexto vendría siendo un lugar en donde se quedará almacenada la información del usuario para poder estarla utilizando en varias secciones dentro de la misma página web, ya que muchas veces estaríamos utilizando al usuario en varias secciones de la página.

// --------- CONTEXTO DE USUARIO ---------

// Básicamente se guardarán los datos de autenticación del usuario, por lo que nos dirigiremos a la carpeta context y dentro crearemos un componente AuthContext.jsx y dentro del mismo insertaremos código, mayormente enfocado cone l AuthProvider para verificar que la autenticación salga correcta.
// Una vez ya acabado todo, podemos visualizar que los registros están completos, sin embargo al actualizar la página estos se borran, más adelante se verá cómo evitar que estos sean borrados

// Para mostrarle a las demás páginas que ya estamos autenticados, dentro del AuthContext creamos un hook useState llamado isAuthenticated con true o false para su verificación.

// Primero en pages, dentro de RegisterPage.jsx crearemos código para redireccionar a /tasks una vez registrado

// Ahora solo se hicieron validaciones rápidas en el registerPage para mostrar algunos errores del registro en pantalla, como las validaciones, pero hasta aorita mongoose nos sigue mostrando otros errores solo en consola, como por ejemplo en caso de regitrar un usuario repetido, pues no debería de mostrarse este error únicamente en consola
// Para solucionar esto nos dirigimos al backend, dentro de controllers/authcontroller.js insertamos código, para iniciar este sería código orientado a poder visualizar el mensaje dentro de AxiosError/response/data/message en la consola de la web con la función de register para por ejemplo al insertar un email que ya existía. Ahora lo que se hará es dirigirnos al Client y dentro de AuthContext.jsx insertamos código, ahora ya hemos acabado ahora sí las validaciones que indican cuando el correo está mal escrito, o si la contraseña no tiene los caracteres especificados, etc.

// ------------ FORMULARIO DE LOGIN ------------
// Para esto en la sección del client, nos dirigimos al LoginPage.jsx y pegamos la mayoría del formulario del RegisterPage.jsx, metemos más código y listo, ya tenemos nuestro Login y se capturan los datos junto con su validaciones, ahora se tiene que crear una ruta para crear la autenticación, por lo que ahora nos dirigiremos al AuthContext.jsx y abajo del signup crearemos una nueva constante llamada signin, una vez ya hayamos terminado con las validaciones para el signin, podemos colocar las validaciones con un timer para que estas desaparezcan pasado un tiempo, para estonos dirigimos al authContext y ahí creamos el código.
// Ahora es posible que el usuario llegue primero al login pero aún no tenga cuenta, por lo que debemos canalizarlo a lo que sería el register, para esto nos dirigimos al LoginPage.jsx, una vez ya hayamos modificado aquí, hacemos lo mismo pero para el register por si es que ya tienen cuenta.

// ------------- RUTAS PROTEGIDAS -------------
// Para esto primero crearemos nuestras páginas, las cuáles serían para suponer que el usuario ya está logeado y con las cuales el mismo interactuará; de momento se crearán las páginas dentro de pages HomePage.jsx, TaskFormPage.jsx, ProfilePage.jsx y TasksPage.jsx; una vez creadas estas, nos dirigiremos a nuestra App.jsx porque tendremos que editar las rutas con sus respectivos componentes