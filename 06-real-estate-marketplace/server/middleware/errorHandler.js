// const errorHandler = (err, req, res) => {
//   let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
//   let message = err.message;

//   // If the error is a mongoose error, then we want to send a more user friendly message
//   if (err.name === 'CastError' && err.kind === 'ObjectId') {
//     statusCode = 404;
//     message = 'Resource not found';
//   }

//   res.status(statusCode).json({
//     message,
//     stack: process.env.NODE_ENV === 'production' ? null : err.stack,
//   });
// };

const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  return error;
};

export { errorHandler };
