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
    year: z.date(),
    startMonth: z.enum([...academicMonths] as [string, ...string[]]),
    endMonth: z.enum([...academicMonths] as [string, ...string[]]),
  }),
});

export const academicSemesterValidationSchema = {
  createAcademicValidationSchema,
};
