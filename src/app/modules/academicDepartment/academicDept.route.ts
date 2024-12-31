import express from 'express';
import validatedRequest from '../../middleware/validation';
import { AcademicDepartmentController } from './academicDept.controller';
import { AcademicDepartmentValidationSchema } from './academicDept.validation';
const router = express.Router();

router.post(
  '/create-academic-department',
  validatedRequest(
    AcademicDepartmentValidationSchema.AcademicDepartmentValidation,
  ),
  AcademicDepartmentController.createAcademicDept,
);
router.get(
  '/get-academic-department/:id',
  AcademicDepartmentController.getSingleAcademicDept,
);
router.get(
  '/get-all-academic-departments',
  AcademicDepartmentController.getAllAcademicDept,
);
router.patch(
  '/update-academic-department/:id',
  validatedRequest(
    AcademicDepartmentValidationSchema.UpdateAcademicDepartmentValidation,
  ),
  AcademicDepartmentController.UpdateAcademicDept,
);
export const academicDeptRoutes = router;
