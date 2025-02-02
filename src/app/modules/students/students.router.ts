import express from 'express';
import { StudentController } from './students.controller';

const router = express.Router();

// router.post('/create-student', StudentController.createStudent);
router.get('/', StudentController.getAllStudents);
router.get('/:id', StudentController.getAStudent);
router.patch(
  '/:id',

  StudentController.updateStudent,
);
router.delete('/:id', StudentController.deleteAStudent);

export const studentRoutes = router;
