import User from '../models/user.model.js'
// Librería instalada para la encriptación
import bcrypt from 'bcryptjs';
// Librería instalada para la utilización de los tokens
// import jwt from 'jsonwebtoken';
import { createAccessToken } from '../libs/jwt.js';

// De esta manera se definen las funciones que tendrán las rutas definidas en auth.routes.js
export const register = async (req, res)=> {
  // Esto nadamás indica un texto "register"
  // res.send("register");
  // Ahora sí comienza el cuerpo de nuestra ruta
  // Para que se reconozca el req.body, nosotros al hacer el testing lo estaríamos haciendo con JSON, sin embargo express no reconoce JSON, por lo que debemos ir a app.js y usar el middleware express.json()
  // console.log(req.body);
  // Ahora si nosotros enviamos mediante un POST dentro de thunder client el JSON correspondiente, es decir:
  /* 
  {
    "email" : "test1@example.com",
    "password" : "testing",
    "username" : "test1"
  }
  */
  // Ya podemos visualizar estos datos en nuestra consola y la desestructuración ha funcionado de forma correcta
  const { email, password, username } = req.body;

  // console.log(email, password, username);
  // Una vez verificando que todo esté correcto y si se está obteniendo la información de forma correcta, es momento de crear nuestro Usuario desde el models, para esto existen 2 maneras:
  /* 
  User.create({
    username,
    email,
    password
  })
  */
  // O la otra manera es instanciando un objeto ESTA ES LA FORMA QUE SE UTILIZARÁ YA QUE NOS PERMITE CREAR EL OBJETO Y LUEGO ACCEDER A EL, lo que incluso lo hace la mejor opción
  try {

    // hash sería el algoritmo para encriptar un arreglo de string, para este caso sería un método proveniente del propio bcrypt, en donde pasamos la contraseña (un string) y la cantidad de veces que este mismo se repetirá para la encriptación de la ocntraseña
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });
    // console.log(newUser);
    // Al testear hasta aquí, nos podemos dar cuenta de que ya se ha creado el objeto, incluso nos ha dado un nuevo id, sin embargo esta es información guardada en el backend, todavía no se ha guardado nada en nuestra DB
    const userSaved = await newUser.save();
    const token = await createAccessToken({id: userSaved._id})

    res.cookie('token', token);
    // res.json({
    //   message: "User created successfully",
    // });

    // res.send("Registrando...");
    // Muestra todo el usuario (contraseña, id, etc.)
    // res.json(userSaved);
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    // console.log(error);
    res.status(500).json({ message: error.message });
  }
}

// Estructura similar a register

export const login = async (req, res)=> {

  const { email, password } = req.body;

  try {

    const userFound = await User.findOne({ email });

    if(!userFound) return res.status(400).json({ message: "User not found" });

    // const passwordHash = await bcrypt.hash(password, 10);
    const isMatch = await bcrypt.compare(password, userFound.password);

    if(!isMatch) return res.status(400).json({ message: "Incorrect password" });

    const token = await createAccessToken({id: userFound._id})

    res.cookie('token', token);
    console.log(token);
    // res.json({
    //   message: "User created successfully",
    // });

    // res.send("Registrando...");
    // Muestra todo el usuario (contraseña, id, etc.)
    // res.json(userSaved);
    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
  // console.log(error);
  res.status(500).json({ message: error.message });
  }
}

export const logout = async (req, res)=> {
  res.cookie('token', "", {
    expires: new Date(0)
  });
  return res.sendStatus(200);
}

export const profile = async (req, res)=> {
  // console.log(req.user);
  const userFound = await User.findById(req.user.id)

  if(!userFound) return res.status(400).json({ message: "User not found" });

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
  res.send('profile');
}