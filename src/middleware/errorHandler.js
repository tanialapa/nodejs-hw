import { HttpError } from 'http-errors';

export const errorHandler = (error, req, res) => {
  if (error instanceof HttpError) {
    res.status(error.status).json({ error: error.message || error.name });

    return;
  }
  const isProd = process.env.NODE_ENV === 'production';

  res.status(500).json({
    error: isProd ? 'Internal Server Error' : error.message,
  });
};
