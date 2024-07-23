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