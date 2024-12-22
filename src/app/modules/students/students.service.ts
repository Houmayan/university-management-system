import { Student } from '../students/students.model';

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
  getAStudentFromDb,
  getStudentsFromDb,
  deleteStudentFromDb,
};
