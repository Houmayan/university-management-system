import { academicSemesterCodeMap } from './academicSem.constant';
import { TAcademicSemester } from './academicSem.interface';
import { AcademicSemester } from './academicSem.model';

const createAcademicSemesterIntoDb = async (playLoad: TAcademicSemester) => {
  if (academicSemesterCodeMap[playLoad.name] !== playLoad.code) {
    throw new Error('Invalid Semester Code');
  }
  const result = AcademicSemester.create(playLoad);
  return result;
};

const getAllAcademicSemesters = async () => {
  const result = await AcademicSemester.find();
  return result;
};

const getAcademicSemesterByIdFromDb = async (id: string) => {
  const result = await AcademicSemester.findById(id);
  return result;
};

const updateAcademicSemesterByIdFromDb = async (
  id: string,
  playLoad: TAcademicSemester,
) => {
  if (
    academicSemesterCodeMap[playLoad.name] !== playLoad.code &&
    playLoad.code &&
    playLoad.name
  ) {
    throw new Error('Invalid Semester Code');
  }
  const result = await AcademicSemester.findByIdAndUpdate(id, playLoad, {
    new: true,
  });
  return result;
};
export const AcademicSemesterServices = {
  createAcademicSemesterIntoDb,
  getAllAcademicSemesters,
  getAcademicSemesterByIdFromDb,
  updateAcademicSemesterByIdFromDb,
};
