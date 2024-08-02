import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export const authRequired = (req, res, next)=> {
  // console.log("validating token...");
  // console.log(req.headers);
  // De esta manera nos imprime todo, incluyendo lo que dice el token, y para evitar desoués tener que particionarlo y acceder desde la posición 0 únicamente del token lo que se hará es lo que se muestra más abajo
  // const token = req.headers.cookie;
  // console.log(token);

  // const cookies = req.cookies;
  // Para poder leer las cookies se necesita una librería que nos ayude a mostrarlas
  // console.log(cookies);
  // De esta manera podemos ver que la cookie se muestra en nuestra consola como un objeto, es así que ya podemos leerla tan sencillo como si fuera un objeto

  const { token } = req.cookies;

  if(!token) return res.status(401).json({ message: "No token, authorization denied" });

  jwt.verify(token, TOKEN_SECRET, (err, user)=> {
    if(err) return res.status(401).json({ message: "Invalid token" });
    // console.log(user);
    req.user = user;
  })

  // next() indica la continuidad de la función, de esta manera evitamos que se quede solo en la función y pueda seguir
  next();
}