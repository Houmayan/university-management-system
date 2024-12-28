import config from '../../config';
import { AcademicSemester } from '../academicSemester/academicSem.model';
import { TStudent } from '../students/students.interface';
import { Student } from '../students/students.model';
import { TUser } from './users.interface';

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
  if (admissionSemester) {
    userData.id = generateStudentId(admissionSemester);
  } else {
    throw new Error('Admission semester not found');
  }
  // if (!password) {
  //   user.password = config.default_password as string;
  // } else {
  //   user.password = password;
  // }
  // const resultUser = await User.create(user);
  const newUser = await User.create(userData);

  if (Object.keys(newUser).length) {
    playLoad.id = newUser.id;
    playLoad.user = newUser._id;
    const newStudent = await Student.create(playLoad);
    return newStudent;
  }
  // Student.isUserExist
  // custom instances
  // const student = new Student(studentData);
  // if (await student.isUserExist(studentData.id)) {
  //   throw new Error('user already exists');
  // }
  // const result = await student.save();
};

export const userService = {
  createStudentIntoDb,
};
