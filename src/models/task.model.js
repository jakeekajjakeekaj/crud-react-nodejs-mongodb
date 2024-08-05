import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  // Para guardar las tareas creadas con el usuario logeado:
  user: {
    // Aunque pueda parecer que tenemos que escribir String, la realidad es que es un ObjectID y es por esto que se debe escribir esta ruta al menos para el caso de mongoose
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model("Task", taskSchema);