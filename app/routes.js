const express = require('express');
const router = express.Router();
const controller = require('./controllers/AuthController');
// Home
router.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

// Login: api/signin
router.post('/api/signin', controller.signIn);

// Registro: api/signup
router.post('/api/signup', controller.signUp);

module.exports = router;
