/* eslint-disable no-lonely-if */
const AppError = require('../utils/appError');

const handleCastErrorDB = (err) => {
  //when we type in a ID that cant be interpreted as a correct mongoose id
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};
const handleDuplicateFieldsDB = (err) => {
  //when we pass data with same field value as in an existing tour
  //finding text that lies between " "
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  const message = `Duplicate field value: ${value}. Please use another value!`;
  return new AppError(message, 400);
};
const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid input data/ Validation error. ${errors.join('. ')}`;
  return new AppError(message, 400);
};
const handleJWTError = () =>
  new AppError('Invalid Token. Please login again!', 401);

const handleJWTExpiredError = () =>
  new AppError('Your token has expired. Please login again!', 401);
//development error
const sendErrorDev = (err, req, res) => {
  if (req.originalUrl.startsWith('/api')) {
    return res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  }
  //rendered website
  // eslint-disable-next-line no-console
  console.error('Error:', err);
  return res.status(err.statusCode).render('error', {
    title: 'Something went wrong!',
    msg: err.message,
  });
};
//prod error
const sendErrorProd = (err, req, res) => {
  if (req.originalUrl.startsWith('/api')) {
    //operational,trusted error send message to client
    if (err.isOperational) {
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    }
    // eslint-disable-next-line no-console
    console.error('Error:', err);
    return res.status(500).json({
      status: 'error',
      message: 'Something went wrong!',
    });
  }
  //rendered website
  if (err.isOperational) {
    return res.status(err.statusCode).render('error', {
      title: 'Something went wrong!',
      msg: err.message,
    });
  }
  // eslint-disable-next-line no-console
  console.error('Error:', err);
  return res.status(err.statusCode).render('error', {
    title: 'Something went wrong!',
    msg: 'Please try again later',
  });
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, req, res);
  } else if (process.env.NODE_ENV === 'production ') {
    let error = Object.create(err);
    if (error.stack.startsWith('CastError')) error = handleCastErrorDB(error);
    //duplicate field value error
    if (error.code === 11000) error = handleDuplicateFieldsDB(error);
    //validation error
    if (error.name === 'ValidationError')
      error = handleValidationErrorDB(error);
    if (error.name === 'JsonWebTokenError') error = handleJWTError();
    if (error.name === 'TokenExpiredError') error = handleJWTExpiredError();
    sendErrorProd(error, req, res);
  }
};
