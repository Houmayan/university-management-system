import { z } from 'zod';
import {
  academicMonths,
  academicSemesterCodes,
  academicSemestersName,
} from './academicSem.constant';

const createAcademicValidationSchema = z.object({
  body: z.object({
    name: z.enum([...academicSemestersName] as [string, ...string[]]),
    code: z.enum([...academicSemesterCodes] as [string, ...string[]]),
    year: z.string(),
    startMonth: z.enum([...academicMonths] as [string, ...string[]]),
    endMonth: z.enum([...academicMonths] as [string, ...string[]]),
  }),
});
const updateAcademicValidationSchema = z.object({
  body: z.object({
    name: z
      .enum([...academicSemestersName] as [string, ...string[]])
      .optional(),
    code: z
      .enum([...academicSemesterCodes] as [string, ...string[]])
      .optional(),
    year: z.string(),
    startMonth: z.enum([...academicMonths] as [string, ...string[]]).optional(),
    endMonth: z.enum([...academicMonths] as [string, ...string[]]).optional(),
  }),
});

export const academicSemesterValidationSchema = {
  createAcademicValidationSchema,
  updateAcademicValidationSchema,
};
