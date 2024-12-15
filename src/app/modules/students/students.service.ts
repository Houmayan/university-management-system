import { Student } from '../students/students.model';
import { TStudent } from './students.interface';

const createStudentIntoDb = async (studentData: TStudent) => {
  if (await Student.isUserExist(studentData.id)) {
    throw new Error('user already exists');
  }
  const result = await Student.create(studentData);
  // Student.isUserExist
  // custom instances
  // const student = new Student(studentData);
  // if (await student.isUserExist(studentData.id)) {
  //   throw new Error('user already exists');
  // }
  // const result = await student.save();

  return result;
};

const getAStudentFromDb = async (id: string) => {
  const result = await Student.aggregate([{ $match: { id: id } }]);
  return result;
};
const getStudentsFromDb = async () => {
  const result = await Student.find();
  return result;
};

const deleteStudentFromDb = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};
export const StudentService = {
  createStudentIntoDb,
  getAStudentFromDb,
  getStudentsFromDb,
  deleteStudentFromDb,
};
