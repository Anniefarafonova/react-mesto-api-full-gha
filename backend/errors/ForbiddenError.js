const { HTTP_STATUS_FORBIDDEN } = require('http2').constants;

module.exports = class ForbiddenError extends Error {
  constructor(massage) {
    super(massage);
    this.statusCode = HTTP_STATUS_FORBIDDEN;
  }
};
