const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');

module.exports = (req, res, next) => {
  let result;
  let token;
  let userDecoded;

  // req.headers.authorization = Bearer + token

  if (!req.headers.authorization) {
    result = { success: false, msg: 'Acceso no autorizado' };
    res.status(401).json(result);
  }
  token = req.headers.authorization.split(' ')[1];
  try {
    userDecoded = jwt.verify(token, authConfig.secret);
    req.user = userDecoded;
    next();
  } catch (err) {
    result = { success: false, msg: 'Token no válido' };
    res.status(500).json(result);
  }
};
