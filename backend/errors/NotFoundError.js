const { HTTP_STATUS_NOT_FOUND } = require('http2').constants;

module.exports = class NotFoundError extends Error {
  constructor(massage) {
    super(massage);
    this.statusCode = HTTP_STATUS_NOT_FOUND;
  }
};
