const mongoose = require('mongoose');
const regex = require('./constRegular');

const cardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: true,
    },
    link: {
      type: String,
      required: true,
      validate: {
        validator(v) {
          return regex.test(v);
        },
        message: 'Ошибка url адреса',
      },
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    likes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    }],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
);

// создаём модель и экспортируем её
module.exports = mongoose.model('card', cardSchema);
