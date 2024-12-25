import { model, Schema } from 'mongoose';
import {
  academicMonths,
  academicSemesterCodes,
  academicSemestersName,
} from './academicSem.constant';
import { TAcademicSemester } from './academicSem.interface';

const AcademicSemesterSchema = new Schema<TAcademicSemester>({
  name: {
    type: String,
    enum: academicSemestersName,
    required: true,
  },
  code: {
    type: String,
    enum: academicSemesterCodes,
    required: true,
  },
  year: {
    type: Date,
    required: true,
  },
  startMonth: {
    type: String,
    enum: academicMonths,
    required: true,
  },
  endMonth: {
    type: String,
    enum: academicMonths,
    required: true,
  },
});

export const academicSemesterModel = model<TAcademicSemester>(
  'AcademicSemester',
  AcademicSemesterSchema,
);

// export default academicSemesterModel;
