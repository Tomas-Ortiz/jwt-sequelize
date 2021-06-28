const { User } = require('../models/index');

// Las politicas son middlewares
module.exports = {
  show: (req, res, next) => {
    let msg = 'No estás autorizado para ver la publicación';
    isAuthorized(req, res, msg, next);
  },
  update: (req, res, next) => {
    let msg = 'No estás autorizado para actualizar la publicación';
    isAuthorized(req, res, msg, next);
  },
  delete: (req, res, next) => {
    let msg = 'No estás autorizado para eliminar la publicación';
    isAuthorized(req, res, msg, next);
  },
};

function isAuthorized(req, res, msg, next) {
  let result;
  // Si el usuario es el autor del post o si es admin está autorizado
  if (req.user.id === req.post.userId || User.isAdmin(req.user.roles)) {
    next();
  } else {
    result = {
      success: false,
      msg: msg,
    };
    res.status(401).json(result);
  }
}
