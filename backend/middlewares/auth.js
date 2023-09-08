const jwt = require('jsonwebtoken');
const UnauthorizedErrors = require('../errors/UnauthorizedErrors');

const { JWT_SECRET = 'mesto-secret' } = process.env;
console.log(JWT_SECRET);

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new UnauthorizedErrors('Необходима авторизация');
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  console.log(JWT_SECRET);
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    throw new UnauthorizedErrors('Необходима авторизация');
  }
  req.user = payload; // записываем пейлоуд в объект запроса

  next(); // пропускаем запрос дальше
};
