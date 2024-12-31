import { TAcademicDepartment } from './academicDept.interface';
import { AcademicDepartment } from './academicDept.model';

const createAcademicDeptIntoDb = async (playLoad: TAcademicDepartment) => {
  const result = await AcademicDepartment.create(playLoad);
  return result;
};

const getSingleAcademicDeptFromDb = async (id: string) => {
  const result = await AcademicDepartment.findById(id);
  return result;
};

const getAllAcademicDepartmentsFromDb = async () => {
  const result = await AcademicDepartment.find();
  return result;
};

const updateAcademicDepartment = async (
  id: string,
  playLoad: TAcademicDepartment,
) => {
  const result = await AcademicDepartment.findOneAndUpdate(
    { _id: id },
    playLoad,
    {
      new: true,
    },
  );
  return result;
};

export const AcademicDepartmentService = {
  createAcademicDeptIntoDb,
  getSingleAcademicDeptFromDb,
  getAllAcademicDepartmentsFromDb,
  updateAcademicDepartment,
};
