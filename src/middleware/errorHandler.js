import { HttpError } from '../helpers/HttpError.js';

export const errorHandler = (error, req, res, next) => {
  if (error instanceof HttpError) {
    res.status(error.status).json({ error: error.message || error.name });

    return;
  }

  console.log("Error 'Middleware:", error.message);
  res.status(500).json({
    error: 'Internal Server Error',
  });
};
