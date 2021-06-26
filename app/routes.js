const express = require('express');
const router = express.Router();

// Middlewares
const auth = require('./middlewares/auth');

// Controllers
const authController = require('./controllers/AuthController');
const postController = require('./controllers/PostController');

// Home
router.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

// Login: api/signin
router.post('/api/signin', authController.signIn);

// Registro: api/signup
router.post('/api/signup', authController.signUp);

// Get posts
router.get('/api/posts', auth, postController.index);

module.exports = router;
