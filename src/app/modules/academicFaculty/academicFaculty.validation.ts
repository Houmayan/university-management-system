import { z } from 'zod';

const academicFacultyValidation = z.object({
  //   id: z.string(),
  body: z.object({
    //   id: z.string(),
    name: z.string({ invalid_type_error: 'Academic Faculty must be string' }),
  }),
});
const updateacademicFacultyValidation = z.object({
  body: z.object({
    //   id: z.string(),
    name: z
      .string({ invalid_type_error: 'Academic Faculty must be string' })
      .optional(),
  }),
});

export const AcademicFacultyValidationSchema = {
  academicFacultyValidation,
  updateacademicFacultyValidation,
};
