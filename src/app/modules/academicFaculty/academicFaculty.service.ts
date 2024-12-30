import { TAcademicFaculty } from './academicFaculty.interface';
import { AcademicFaculty } from './academicFaculty.model';

const createAcademicFacultyIntoDb = async (playLoad: TAcademicFaculty) => {
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

const updateAcademicFacultyFromDb = async (
  id: string,
  playLoad: Partial<TAcademicFaculty>,
) => {
  const result = await AcademicFaculty.findOneAndUpdate({ _id: id }, playLoad, {
    new: true,
  });
  return result;
};

export const AcademicFacultyService = {
  createAcademicFacultyIntoDb,
  getAllAcademicFacultiesFromDb,
  getAAcademicFacultyFromDb,
  updateAcademicFacultyFromDb,
};
