import { HttpError } from 'http-errors';

export const errorHandler = (error, req, res, next) => {
  if (error instanceof HttpError) {
    res.status(error.status).json({ message: error.message || error.name });

    return;
  }
  const isProd = process.env.NODE_ENV === 'production';

  res.status(500).json({
    message: isProd ? 'Internal Server Error' : error.message,
  });
};
