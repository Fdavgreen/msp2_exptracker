// backend/utils/errorResponse.js

class ErrorResponse extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
      // Capturing stack trace for debugging
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  module.exports = ErrorResponse;
  