import { z } from 'zod';

const userSchema = z.object({
  //   id: z.string(),
  password: z
    .string({ invalid_type_error: 'Password must be string' })
    .max(20)
    .optional(),
});

export const UserValidationSchema = {
  userSchema,
};
