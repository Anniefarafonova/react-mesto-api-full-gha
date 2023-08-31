const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const regex = require('./constRegular');
const UnauthorizedErrors = require('../errors/UnauthorizedErrors');

const userSchema = new mongoose.Schema({
  name: { // у пользователя есть имя — опишем требования к имени в схеме:
    type: String, // имя — это строка
    default: 'Жак-Ив Кусто', // оно должно быть у каждого пользователя, так что имя — обязательное поле
    minlength: 2, // минимальная длина имени — 2 символа
    maxlength: 30, // а максимальная — 30 символов
  },
  about: {
    type: String, // тип — String
    default: 'Исследователь',
    minlength: 2, // минимальная длина имени — 2 символа
    maxlength: 30, // а максимальная — 30 символов
  },
  avatar: {
    type: String,
    default: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
    validate: {
      validator(url) {
        return regex.test(url);
      },
      message: 'Ошибка url адреса',
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator(email) {
        validator.isEmail(email);
        // validator: validator.isEmail,
      },
      message: 'Неправильный email',
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

userSchema.statics.findUserByCredentials = function findUserByCredentials(email, password) {
  return this.findOne({ email })
    .select('+password')
    .then((user) => {
      if (!user) {
        // throw new UnauthorizedErrors('Неправильные почта или пароль');
        return Promise.reject(new UnauthorizedErrors('Неправильные почта или пароль'));
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            // throw new UnauthorizedErrors('Неправильные почта или пароль');
            return Promise.reject(new UnauthorizedErrors('Неправильные почта или пароль'));
          }

          return user; // теперь user доступен
        });
    });
};
module.exports = mongoose.model('user', userSchema);
