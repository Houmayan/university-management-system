/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { ZodError, ZodIssue } from 'zod';
import config from '../config';
import { TErrorSource } from '../interface/errorTypes';

const globalErrorhandle = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'something went wrong';

  const handleZodError = (err: ZodError) => {
    const errorSource: TErrorSource = err.issues.map((issue: ZodIssue) => {
      return {
        path: issue?.path[issue.path.length - 1],
        message: issue.message,
      };
    });
    const statusCode = 400;

    return {
      statusCode,
      message: 'Zod validation Error',
      errorSource,
    };
  };

  let errorSource: TErrorSource = [
    {
      path: '',
      message: 'Something Went Wrong',
    },
  ];
  if (err instanceof ZodError) {
    const simplifiedZodError = handleZodError(err);
    statusCode = simplifiedZodError?.statusCode;
    message = simplifiedZodError?.message;
    errorSource = simplifiedZodError?.errorSource;
  }
  return res.status(statusCode).json({
    success: false,
    // error: err,
    message,
    errorSource,
    stack: config.NODE_ENV === 'developement' ? err?.stack : null,
  });
};

export default globalErrorhandle;
