import { z } from 'zod';
const AcademicDepartmentValidation = z.object({
  body: z.object({
    //body is used because in higher order function we are using --middleware--validation.ts --reqbody ()//
    name: z.string({
      invalid_type_error: 'Academic Department  must be string',
      required_error: 'Academic Department is required',
    }),
    AcademicDepartment: z.string({
      invalid_type_error: 'Academic Department must be string',
      required_error: 'Academic Department is required',
    }),
  }),
});
const UpdateAcademicDepartmentValidation = z.object({
  body: z.object({
    //body is used because in higher order function we are using --middleware--validation.ts --reqbody ()//
    name: z
      .string({
        invalid_type_error: 'Academic Department  must be string',
        required_error: 'Academic Department is required',
      })
      .optional(),
    AcademicDepartment: z
      .string({
        invalid_type_error: 'Academic Department must be string',
        required_error: 'Academic Department is required',
      })
      .optional(),
  }),
});

export const AcademicDepartmentValidationSchema = {
  AcademicDepartmentValidation,
  UpdateAcademicDepartmentValidation,
};
