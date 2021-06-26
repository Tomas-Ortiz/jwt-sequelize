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
app.use(require('./routes'));

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);

  sequelize
    .authenticate()
    .then(() => {
      console.log('Conectado a la base de datos');
    })
    .catch((err) => {
      console.log('Error al conectarse a la base de datos');
    });
});
