const { User } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');

const authController = {
  signIn: async (req, res) => {
    let result, token, passwordMatches;
    try {
      let { email, password } = req.body;
      const user = await User.findOne({ where: { email: email } });
      if (!user) {
        result = { success: false, msg: 'El correo ingresado no existe' };
        return res.status(400).send(result);
      }
      passwordMatches = await bcrypt.compare(password, user.password);
      if (passwordMatches) {
        // No se debería agregar información confidencial al token
        // Se lo hace a fines de simplificar la app
        token = jwt.sign({ user: user }, authConfig.secret, {
          expiresIn: authConfig.expires,
        });
        result = { success: true, token: token, user: user };
        res.status(200).json(result);
      } else {
        result = { success: false, msg: 'Contraseña incorrecta' };
        res.status(401).json(result);
      }
    } catch (err) {
      result = { success: false, msg: err };
      res.status(500).json(result);
    }
  },

  signUp: async (req, res) => {
    let result;
    try {
      let password = req.body.password;
      if (password.length < 9 || password.length > 50) {
        result = {
          success: false,
          msg: 'La contraseña debe tener entre 9 y 50 caracteres',
        };
        res.status(400).json(result);
      }
      let encryptedPassword = await bcrypt.hash(
        password,
        Number.parseInt(authConfig.salt)
      );
      const user = await User.create({
        name: req.body.name,
        password: encryptedPassword,
        email: req.body.email,
      });
      result = {
        success: true,
        msg: 'Usuario registrado',
        user: user,
      };
      res.status(201).json(result);
    } catch (err) {
      result = { success: false, msg: err };
      res.status(500).json(result);
    }
  },
};

module.exports = authController;
