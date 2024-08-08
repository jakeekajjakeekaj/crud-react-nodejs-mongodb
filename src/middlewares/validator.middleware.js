export const validateSchema = (schema)=> (req, res, next)=> {
  // el .parse() lo utilizamos para convertir a objeto JS
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    // return res.status(400).json({ error })
    return res
      .status(400)
      .json({ error: error.errors.map(error=> error.message) });
  }
};