import { model, Schema } from 'mongoose';
import { TAcademicDepartment } from './academicDept.interface';

const AcademicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
      //   required: true,
    },
  },
  {
    timestamps: true,
  },
);

export class AppError extends Error {
  public statusCode: number;
  constructor(statusCode: number, message: string, stack = '') {
    super(message);
    this.statusCode = statusCode;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

AcademicDepartmentSchema.pre('save', async function (next) {
  const isDepartmentExist = await AcademicDepartment.findOne({
    name: this.name,
  });
  // const result = await AcademicDepartment.findOne();
  if (isDepartmentExist) {
    throw new Error('Department already exist');
  }
  next();
});

AcademicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
  // console.log('under update');
  // const query = this.getQuery();
  const query = this.getQuery();
  const isDepartmentExist = await AcademicDepartment.findOne({ id: query._id });
  if (!isDepartmentExist) {
    // console.log('ee');
    throw new AppError(404, 'Department does not exist');
  }
  next();
});

export const AcademicDepartment = model<TAcademicDepartment>(
  'AcademicDepartment',
  AcademicDepartmentSchema,
);
