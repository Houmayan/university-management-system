// const express = require('express');
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { studentRoutes } from './app/modules/students/students.router';
const app: Application = express();
app.use(express.json());
app.use(cors());
app.use('/api/v1/students', studentRoutes);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

console.log('object');
export default app;
