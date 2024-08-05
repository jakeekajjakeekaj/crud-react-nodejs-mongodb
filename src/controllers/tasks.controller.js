import Task from '../models/task.model.js';

export const getTasks = async (req, res)=> {
  const tasks = await Task.find({
    user: req.user.id
  }).populate('user');  // Al indicar populate, lo que hacemos es que en vez de que se escriba al id y ya, con populate nos escribe todo lo correspondiente con este id
  res.json(tasks);
}

export const getTask = async (req, res)=> {
  // El req.params.id básicamente vendría siendo el id escrito en la URL
  const task = await Task.findById(req.params.id).populate('user');
  if(!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
};

export const createTask = async (req, res)=> {
  const { title, description, date } = req.body;
  const newTask = new Task({
    title,
    description,
    date,
    // Esto porque primero se pasó por validateToken y dentro de req.user se tiene el id, es por esto que lo declaramos de esta manera
    user: req.user.id
  });

  const savedTask = await newTask.save();
  res.json(savedTask);
};

export const updateTask = async (req, res)=> {
  // Para el caso de mongoose, debemos especificar { new: true } ya que de no hacerlo, al momento de actualizar, nuestro res.json estaría respondiendo con el dato viejo a pesar de haber sido actualizado, por lo que al especificar new: true, estamos indicando que si se actulice el nuevo dato al momento de responder
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if(!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
}

export const deleteTask = async (req, res)=> {
  const task = await Task.findByIdAndDelete(req.params.id);
  if(!task) return res.status(404).json({ message: "Task not found" });
  // res.json(task);
  // 204: todo estuvo bien pero no hay nada que devolver
  return res.sendStatus(204);
}