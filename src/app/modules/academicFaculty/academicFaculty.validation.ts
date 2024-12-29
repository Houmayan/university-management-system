import { z } from 'zod';

const academicFacultyValidation = z.object({
  //   id: z.string(),
  name: z.string({ invalid_type_error: 'Academic Faculty must be string' }),
});

export const UserValidationSchema = {
  academicFacultyValidation,
};
