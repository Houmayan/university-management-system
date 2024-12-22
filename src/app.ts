// const express = require('express');
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorhandle from './app/middleware/globalError';
import router from './app/routes';
const app: Application = express();
app.use(express.json());
app.use(cors());
app.use('/api/v1', router);
// app.use('/api/v1/users', userRoutes);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(globalErrorhandle);
// console.log('object');
export default app;
