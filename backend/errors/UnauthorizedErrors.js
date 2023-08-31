const { HTTP_STATUS_UNAUTHORIZED } = require('http2').constants;

module.exports = class UnauthorizedErrors extends Error {
  constructor(massage) {
    super(massage);
    this.statusCode = HTTP_STATUS_UNAUTHORIZED;
  }
};
