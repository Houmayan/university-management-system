import { TAcademicSemester } from '../academicSemester/academicSem.interface';

export const generateStudentId = (playLoad: TAcademicSemester) => {
  const currentId = (0).toString();
  const incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  return `${playLoad.year}${playLoad.code}${incrementId}`;
};
