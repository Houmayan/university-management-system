import mongoose from 'mongoose';
import config from '../../config';
import { AcademicSemester } from '../academicSemester/academicSem.model';
import { TStudent } from '../students/students.interface';
import { Student } from '../students/students.model';
import { TUser } from './users.interface';

import { AppError } from '../academicDepartment/academicDept.model';
import { User } from './users.model';
import { generateStudentId } from './users.utils';

const createStudentIntoDb = async (password: string, playLoad: TStudent) => {
  //   if (await Student.isUserExist(studentData.id)) {
  //     throw new Error('user already exists');
  //   }
  const userData: Partial<TUser> = {};
  userData.role = 'student';
  userData.password = (config.default_password as string) || password;
  // userData.id = '2030100001';

  // find academic semester info
  const admissionSemester = await AcademicSemester.findById(
    playLoad.admissionSemester,
  );

  // if (!password) {
  //   user.password = config.default_password as string;
  // } else {
  //   user.password = password;
  // }
  // const resultUser = await User.create(user);
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    if (admissionSemester) {
      userData.id = await generateStudentId(admissionSemester);
    } else {
      throw new Error('Admission semester not found');
    }
    // create user (transaction-1)
    const newUser = await User.create([userData], { session });
    if (!newUser.length) {
      throw new AppError(404, 'User not created');
    }
    playLoad.id = newUser[0].id;
    playLoad.user = newUser[0]._id;
    // create student (transaction-2)
    const newStudent = await Student.create([playLoad], { session }); // create method can take array of objects. thats why we are passing array of objects
    if (!newStudent.length) {
      throw new AppError(404, 'Student not created');
    }

    await session.commitTransaction();
    await session.endSession();

    return newStudent;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
  }
};

export const userService = {
  createStudentIntoDb,
};
