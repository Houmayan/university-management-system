import { z } from 'zod';

const academicFacultyValidation = z.object({
  //   id: z.string(),
  //
  body: z.object({
    //body is used because in higher order function we are using --middleware--validation.ts --reqbody ()
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
