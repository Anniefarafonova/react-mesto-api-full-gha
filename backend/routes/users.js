const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const regex = require('../model/constRegular');
const {
  getUsers,
  getUsersId,
  patchUsers,
  patchUsersAvatar,
  getUsersMe,
} = require('../controllers/users');

router.get('/users', getUsers); // возвращает всех пользователей
router.get('/users/me', getUsersMe); // возвращает информацию о текущем пользователе
router.get('/users/:userId', celebrate({
  params: Joi.object().keys({
    userId: Joi.string().min(24).max(24).required(),
  }),
}), getUsersId); // возвращает пользователя по _id

router.patch('/users/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
  }),
}), patchUsers); // обновляет профиль

router.patch('/users/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().pattern(regex),
  }),
}), patchUsersAvatar); // обновляет аватар

module.exports = router;
