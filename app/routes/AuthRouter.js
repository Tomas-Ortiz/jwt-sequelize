const express = require('express');
const router = express.Router();
const controller = require('../controllers/AuthController');

router.post('/api/signin', controller.signIn);
router.post('/api/signup', controller.signUp);

module.exports = router;
