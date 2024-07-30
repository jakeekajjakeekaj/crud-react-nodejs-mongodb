import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    // trim indica que se quitarán los espacios en blanco
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
}, {
  // Sirve para indicar la fehca y hora en que fue creada y actualizada
  timestamps: true
});

// de esa manera al crear el mongoose.model estamos creando ahora sí nuestro modelado, es decir lo de arriba únicamente indica cómo es que se verá nuestro esquema, pero todavía no seremos capaces de crear consultas ni nada por el estilo, pero gracias a mongoose ahora sí nosotros definimos por ejemplo User, y lo que hará es que creará modelos users tomando en cuenta la estructura que indicamos para ahora sí poder realizar las respectivas consultas

// const User = mongoose.model('User', userSchema)
// export default User;

// De esta manera con User ya podemos tener User.find, .remove, .delete; pero al no usarse en esta sección lo que se hará será lo de abajo

export default mongoose.model('User', userSchema);