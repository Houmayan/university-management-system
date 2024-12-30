import express from 'express';
import validatedRequest from '../../middleware/validation';
import { AcademicFacultyController } from './academicFaculty.controller';
import { AcademicFacultyValidationSchema } from './academicFaculty.validation';

const router = express.Router();

router.post(
  '/create-academic-faculty',
  validatedRequest(AcademicFacultyValidationSchema.academicFacultyValidation),
  AcademicFacultyController.createAcademicFaculty,
);
router.get(
  '/get-academic-faculties',
  AcademicFacultyController.getAllAcademicFaculties,
);
router.get(
  '/get-academic-faculty/:id',
  AcademicFacultyController.getAAcademicFaculty,
);
router.patch(
  '/update-academic-faculty/:id',
  validatedRequest(
    AcademicFacultyValidationSchema.updateacademicFacultyValidation,
  ),
  AcademicFacultyController.updateAcademicFaculty,
);

export const AcademicFacultyRoutes = router;
