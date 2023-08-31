const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const regex = require('../model/constRegular');
const {
  postCards,
  getCards,
  deleteCardsID,
  putCardsIdLike,
  deleteCardsIDLike,
} = require('../controllers/cards');

router.post('/cards', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    link: Joi.string().required().pattern(regex),
  }),
}), postCards);// создаёт карточку

router.get('/cards', getCards); // возвращает все карточки

router.delete('/cards/:cardId', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().min(24).max(24).required(),
  }),
}), deleteCardsID); // удаляет карточку по идентификатору

router.put('/cards/:cardId/likes', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().min(24).max(24).required(),
  }),
}), putCardsIdLike); // поставить лайк карточке

router.delete('/cards/:cardId/likes', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().min(24).max(24).required(),
  }),
}), deleteCardsIDLike); // убрать лайк с карточки

module.exports = router;
