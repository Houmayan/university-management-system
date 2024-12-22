import { Schema, model } from 'mongoose';
import validator from 'validator';

import {
  StudentModel,
  TGuardian,
  TLocalGuardian,
  TStudent,
  // TStudentModel,
  TUserName,
} from './students.interface';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First Name required'],
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
  },
});
const gurdianSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});
const localGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});
const studentSchema = new Schema<TStudent, StudentModel>({
  id: { type: String, required: true, unique: true },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'user id is required'],
    unique: true,
    ref: 'User',
  },
  // password: { type: String, required: true },
  name: userNameSchema,
  gender: {
    type: String,
    required: true,
    enum: {
      values: ['male', 'Female', 'other'],
      message: 'Write male, female or others',
    },
  },
  dateOfBirth: { type: String, required: true },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: '{VALUE} is not a valid email',
    },
  },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloogGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  permanentAddres: { type: String, required: true },
  guardian: gurdianSchema,
  localGuardian: localGuardianSchema,
  profileImg: { type: String },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// studentSchema.pre('save', async function (next) {
//   // eslint-disable-next-line @typescript-eslint/no-this-alias
//   const user = this;

//   user.password = await bcrypt.hash(this.password, Number(config.salt_rounds));
//   next();
// });

// studentSchema.post('save', function (doc, next) {
//   doc.password = '';
//   next();
// });

studentSchema.pre('find', function (next) {
  // console.log(this);
  this.find({ isDeleted: { $ne: true } });
  next();
});
studentSchema.pre('findOne', function (next) {
  // console.log(this);
  this.find({ isDeleted: { $ne: true } });
  next();
});
studentSchema.pre('aggregate', function (next) {
  // console.log(this);
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});
// static method

studentSchema.statics.isUserExist = async function (id: string) {
  const existUser = await Student.findOne({ id });
  return existUser;
};

export const Student = model<TStudent, StudentModel>('Student', studentSchema);
