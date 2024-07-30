// Librería instalada para la utilización de los tokens
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export function createAccessToken(payload) {
  new Promise((resolve, reject)=> {
    jwt.sign(
      // {
      // PAYLOAD: Dato que se guardará dentro, para este caso se guardará el id ya que es la información que contendrá el token para así manejar esta información tanto en el front como en el back, de esta manera no tendremos que estar realizando consultas a cada rato y podemos ver a quién debemos estar apuntando
      // id: userSaved._id,
      // }, 
      payload,
      // CLAVE SECRETA (FIRMA): Esta es la clave secreta que contendrá el token, es como si fuera la contraseña, de esta manera podemos asegurarnos que si tanto del lado del front como del back la FIRMA coincide, entonces el token puede proceder, de lo contrario este token no procede ya que es la medida de seguridad para evitar ataques
      // 'secret123',
      TOKEN_SECRET, 
      {
        // OPCIONES: Para este caso solo se indican las opciones que contendrá nuestro token por ejemplo indicar en cuánto tiempo expirará
        expiresIn: "1d",
      },
      // CALLBACK: Es una simple callback en donde se indica lo que pasará en caso de error o en caso de que todo se encuentre correcto
      (err, token)=> {
        if (err) reject(err);
        resolve(token);
        // POdemos enviarlo así, el problema de enviarlo así para ser trabajo en el front, es que luego desde el front se tendrá que estar leyendo el body y varias cosas que se deberían hacer, es por esto que mejor se optará por manejar cookies como se muestra más abajo
        // else res.json({ token });
        // Este sería un método que ya tiene express, esto lo que provoca es que se envíe a través de una cookie al token y así evitar cosas más laboriosas del lado del front
      }
    );
  })
}