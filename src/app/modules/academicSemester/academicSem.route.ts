import express from 'express';
import { AcademicSemesterController } from './academicSem.controller';

const router = express.Router();

router.post(
  'create-academic-semester',
  AcademicSemesterController.createAcademicSemester,
);

export const AcademicSemesterRoutes = router;
