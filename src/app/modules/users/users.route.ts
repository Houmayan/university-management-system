import express from 'express';
import validatedRequest from '../../middleware/validation';
import { studentValidations } from '../students/students.validation';
import { UserControllers } from './users.controller';

const router = express.Router();

router.post(
  '/create-student',
  validatedRequest(studentValidations.studentValidationSchema),
  UserControllers.createStudent,
);

export const userRoutes = router;
