const express = require('express');
const app = express();
const { sequelize } = require('./models/index');

// Settings
const PORT = process.env.PORT || 3000;
app.set('json spaces', 2);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.get('/', (req, res) => {
  res.status(200).json({ saludo: 'Hola Mundo' });
});

app.use(require('./routes/AuthRouter'));
app.use(require('./routes/PostRouter'));

app.listen(PORT, async () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
  // Verificando la conexión a la bd
  try {
    await sequelize.authenticate();
    console.log('Conectado a la base de datos');
  } catch (err) {
    console.error('Error al conectarse a la base de datos: ', err);
  }
});
