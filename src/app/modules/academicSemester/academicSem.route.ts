import express from 'express';
import validatedRequest from '../../middleware/validation';
import { AcademicSemesterController } from './academicSem.controller';
import { academicSemesterValidationSchema } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validatedRequest(
    academicSemesterValidationSchema.createAcademicValidationSchema,
  ),
  AcademicSemesterController.createAcademicSemester,
);
router.get(
  '/get-academic-semester',
  AcademicSemesterController.getAcademicSemester,
);
router.get(
  '/get-academic-semester/:id',
  AcademicSemesterController.getAcademicSemesterbyId,
);
router.patch(
  '/update-academic-semester/:id',
  validatedRequest(
    academicSemesterValidationSchema.updateAcademicValidationSchema,
  ),
  AcademicSemesterController.updateAcademicSemester,
);

export const AcademicSemesterRoutes = router;
