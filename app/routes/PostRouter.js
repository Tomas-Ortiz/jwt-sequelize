const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const controller = require('../controllers/PostController');
const postPolicy = require('../policies/PostPolicy');

// Posts routes
// Middlewares:
// auth (verificar el token)
// postController.find (verificar la existencia del post)
// postPolicy (verificar permisos para esa operación según el rol)

router.post('/api/post', auth, controller.create);
router.get('/api/posts', auth, controller.list);
router.get(
  '/api/post/:id',
  auth,
  controller.find,
  postPolicy.show,
  controller.show
);
router.put(
  '/api/post/:id',
  auth,
  controller.find,
  postPolicy.update,
  controller.update
);
router.delete(
  '/api/post/:id',
  auth,
  controller.find,
  postPolicy.delete,
  controller.delete
);

module.exports = router;
