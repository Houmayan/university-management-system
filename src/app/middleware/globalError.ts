/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';

const globalErrorhandle = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'something went wrong';
  return res.status(statusCode).json({
    success: false,
    error: err,
    message,
  });
};

export default globalErrorhandle;
