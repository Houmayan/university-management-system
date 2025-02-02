// import { z } from 'zod';

import { z } from 'zod';

// Define the Zod schema for UserName
const userNameValidationSchema = z.object({
  firstName: z.string().min(1, { message: 'First Name required' }),
  middleName: z.string().optional(),
  lastName: z.string().min(1, { message: 'Last name is required' }),
});
const updateUserNameValidationSchema = z.object({
  firstName: z.string().min(1, { message: 'First Name required' }).optional(),
  middleName: z.string().optional(),
  lastName: z.string().min(1, { message: 'Last name is required' }).optional(),
});

// Define the Zod schema for Guardian
const guardianValidationSchema = z.object({
  fatherName: z.string().min(1, { message: 'Father Name is required' }),
  fatherOccupation: z
    .string()
    .min(1, { message: 'Father Occupation is required' }),
  fatherContactNo: z
    .string()
    .min(1, { message: 'Father Contact No is required' }),
  motherName: z.string().min(1, { message: 'Mother Name is required' }),
  motherOccupation: z
    .string()
    .min(1, { message: 'Mother Occupation is required' }),
  motherContactNo: z
    .string()
    .min(1, { message: 'Mother Contact No is required' }),
});
const updateGuardianValidationSchema = z.object({
  fatherName: z
    .string()
    .min(1, { message: 'Father Name is required' })
    .optional(),
  fatherOccupation: z
    .string()
    .min(1, { message: 'Father Occupation is required' })
    .optional(),
  fatherContactNo: z
    .string()
    .min(1, { message: 'Father Contact No is required' })
    .optional(),
  motherName: z
    .string()
    .min(1, { message: 'Mother Name is required' })
    .optional(),
  motherOccupation: z
    .string()
    .min(1, { message: 'Mother Occupation is required' })
    .optional(),
  motherContactNo: z
    .string()
    .min(1, { message: 'Mother Contact No is required' })
    .optional(),
});

// Define the Zod schema for LocalGuardian
const localGuardianValidationSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  occupation: z.string().min(1, { message: 'Occupation is required' }),
  contactNo: z.string().min(1, { message: 'Contact No is required' }),
  address: z.string().min(1, { message: 'Address is required' }),
});
const updateLocalGuardianValidationSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }).optional(),
  occupation: z
    .string()
    .min(1, { message: 'Occupation is required' })
    .optional(),
  contactNo: z
    .string()
    .min(1, { message: 'Contact No is required' })
    .optional(),
  address: z.string().min(1, { message: 'Address is required' }).optional(),
});

// Define the main Zod schema for Student
const studentValidationSchema = z.object({
  // id: z.string().min(1, { message: 'ID is required' }),
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      // id: z.string().min(1, { message: 'ID is required' })

      name: userNameValidationSchema,
      gender: z.enum(['male', 'Female', 'other'], {
        errorMap: () => ({ message: 'Write male, female or others' }),
      }),
      dateOfBirth: z.string().min(1, { message: 'Date of Birth is required' }),
      email: z.string().email({ message: 'Invalid email address' }),
      contactNo: z.string().min(1, { message: 'Contact No is required' }),
      emergencyContactNo: z
        .string()
        .min(1, { message: 'Emergency Contact No is required' }),
      bloogGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z
        .string()
        .min(1, { message: 'Present Address is required' }),
      permanentAddres: z
        .string()
        .min(1, { message: 'Permanent Address is required' }),
      guardian: guardianValidationSchema,
      localGuardian: localGuardianValidationSchema,
      profileImg: z.string().min(1, { message: 'Profile Image is required' }),
      // isActive: z.enum(['active', 'inActive']).optional(),
      // isDeleted: z.boolean(),})
    }),
  }),
});
const updateStudentValidationSchema = z.object({
  // id: z.string().min(1, { message: 'ID is required' }),
  body: z.object({
    student: z.object({
      // id: z.string().min(1, { message: 'ID is required' })

      name: updateUserNameValidationSchema,
      gender: z
        .enum(['male', 'Female', 'other'], {
          errorMap: () => ({ message: 'Write male, female or others' }),
        })
        .optional(),
      dateOfBirth: z
        .string()
        .min(1, { message: 'Date of Birth is required' })
        .optional(),
      email: z.string().email({ message: 'Invalid email address' }).optional(),
      contactNo: z
        .string()
        .min(1, { message: 'Contact No is required' })
        .optional(),
      emergencyContactNo: z
        .string()
        .min(1, { message: 'Emergency Contact No is required' })
        .optional(),
      bloogGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z
        .string()
        .min(1, { message: 'Present Address is required' })
        .optional(),
      permanentAddres: z
        .string()
        .min(1, { message: 'Permanent Address is required' })
        .optional(),
      guardian: updateGuardianValidationSchema,
      localGuardian: updateLocalGuardianValidationSchema,
      profileImg: z
        .string()
        .min(1, { message: 'Profile Image is required' })
        .optional(),
      // isActive: z.enum(['active', 'inActive']).optional(),
      // isDeleted: z.boolean(),})
    }),
  }),
});

// Example usage for validation

export const studentValidations = {
  studentValidationSchema,
  updateStudentValidationSchema,
};
