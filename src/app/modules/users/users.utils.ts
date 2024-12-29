import { TAcademicSemester } from '../academicSemester/academicSem.interface';
import { User } from './users.model';

const findLastStudentId = async () => {
  const lastStudent = await User.findOne(
    {
      role: 'student',
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({ createdAt: -1 })
    .lean();
  return lastStudent?.id ? lastStudent.id : '0000';
};

export const generateStudentId = async (playLoad: TAcademicSemester) => {
  let currentId = (0).toString();
  const lastStudentId = await findLastStudentId();
  //2030 01 0001
  const lastStudentSemesterCode = lastStudentId.substring(4, 6);
  const lastStudentYear = lastStudentId.substring(0, 4);
  const currentSemesterCode = playLoad.code;
  const currentYear = playLoad.year;

  if (
    lastStudentId &&
    lastStudentSemesterCode === currentSemesterCode &&
    lastStudentYear === currentYear
  ) {
    currentId = lastStudentId.slice(6);
  }
  const incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  return `${playLoad.year}${playLoad.code}${incrementId}`;
};
