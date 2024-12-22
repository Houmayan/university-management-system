/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { HttpStatus } from 'http-status-ts';
const notFound = (req: Request, res: Response, next: NextFunction) => {
  //   const statusCode = 500;
  //   const message = err.message || 'something went wrong';
  return res.status(HttpStatus.NOT_FOUND).json({
    success: false,
    error: '',
    message: 'API not found',
  });
};

export default notFound;
