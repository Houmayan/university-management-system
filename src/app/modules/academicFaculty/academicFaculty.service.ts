import { AcademicFaculty } from './academicFaculty.model';

const createAcademicFacultyIntoDb = async (playLoad: TAcademicFacultyx) => {
  const result = await AcademicFaculty.create(playLoad);
  return result;
};

const getAllAcademicFacultiesFromDb = async () => {
  const result = await AcademicFaculty.find();
  return result;
};
const getAAcademicFacultyFromDb = async (id: string) => {
  const result = await AcademicFaculty.findById(id);
  return result;
};

const updateAcademicFacultyFromDb =

export const AcademicFacultyService = {
  createAcademicFacultyIntoDb,
  getAllAcademicFacultiesFromDb,
  getAAcademicFacultyFromDb
};
