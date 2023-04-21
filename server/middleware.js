const catchAsyncError = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((e) => next(e));
  };
};

class ExpressError extends Error {
  constructor(message, statusCode) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

module.exports = {
  ExpressError,
  catchAsyncError,
};
