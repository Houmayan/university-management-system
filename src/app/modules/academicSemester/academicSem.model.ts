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
    type: String,
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

AcademicSemesterSchema.pre('save', async function (next) {
  console.log('working');
  const isSemesterExist = await AcademicSemester.findOne({
    name: this.name,
    year: this.year,
  });
  if (isSemesterExist) {
    throw new Error('Semester already exist');
  }
  next();
});

export const AcademicSemester = model<TAcademicSemester>(
  'AcademicSemester',
  AcademicSemesterSchema,
);

// export default academicSemesterModel;
