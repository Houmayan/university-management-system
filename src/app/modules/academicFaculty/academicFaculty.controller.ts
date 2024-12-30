import { Request, Response } from 'express';
import catchAsync from '../../utility/catchAsync';
import sendResponse from '../../utility/sendResponse';
import { AcademicFacultyService } from './academicFaculty.service';

const createAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AcademicFacultyService.createAcademicFacultyIntoDb(
      req.body,
    );
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: 'Academic Faculty created successfully',
      data: result,
    });
  },
);

const getAllAcademicFaculties = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AcademicFacultyService.getAllAcademicFacultiesFromDb();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'All Academic Faculties fetched successfully',
      data: result,
    });
  },
);
const getAAcademicFaculty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await AcademicFacultyService.getAAcademicFacultyFromDb(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic Faculty fetched successfully ...',
    data: result,
  });
});

const updateAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AcademicFacultyService.updateAcademicFacultyFromDb(
      id,
      req.body,
    );
    return sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Academic Faculty Updated',
      data: result,
    });
  },
);

// export const AcademicFacultyController = {
//     createAcademicFaculty,
//     getAllAcademicFaculties,
//     getAAcademicFaculty,
//     updateAcademicFaculty,
// };

export const AcademicFacultyController = {
  createAcademicFaculty,
  getAllAcademicFaculties,
  getAAcademicFaculty,
  updateAcademicFaculty,
};
