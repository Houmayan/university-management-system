import { model, Schema } from 'mongoose';
import { TAcademicDepartment } from './academicDept.interface';

const AcademicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
    },
    AcademicDepartment: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
      //   required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const AcademicDepartment = model<TAcademicDepartment>(
  'AcademicDepartment',
  AcademicDepartmentSchema,
);
