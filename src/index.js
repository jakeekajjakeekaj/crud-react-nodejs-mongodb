import app from './app.js';
// El de arriba NO lleva llaves y el de abajo SI lleva llaves, debido a que el de arriba tiene un export default mientras que el de abajo solo tiene un export
import { connectDB } from './db.js';

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Server is listening on port ${PORT}...`));