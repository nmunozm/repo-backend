const express = require('express');
const cors = require('cors'); // 1. Importar cors
const app = express();

app.use(cors()); // 2. Habilitar CORS para todas las rutas
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send({ mensaje: '¡Hola!' });
});

// Exportamos la app para el test
module.exports = app;

// Solo encendemos el servidor si este archivo se ejecuta directamente
if (require.main === module) {
  app.listen(3000, () => console.log('Servidor en puerto 3000'));
}