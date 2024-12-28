import { Request, Response } from 'express';
import catchAsync from '../../utility/catchAsync';
import sendResponse from '../../utility/sendResponse';
import { AcademicSemesterServices } from './academicSem.service';

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AcademicSemesterServices.createAcademicSemesterIntoDb(
      req.body,
    );
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Academic Semester Created',
      data: result,
    });
  },
);
const getAcademicSemester = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSemesterServices.getAllAcademicSemesters();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic Semester Fetched',
    data: result,
  });
});

const getAcademicSemesterbyId = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result =
      await AcademicSemesterServices.getAcademicSemesterByIdFromDb(id);
    return sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Academic Semester Fetched',
      data: result,
    });
  },
);
const updateAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result =
      await AcademicSemesterServices.updateAcademicSemesterByIdFromDb(
        id,
        req.body,
      );
    return sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Academic Semester Updated',
      data: result,
    });
  },
);

export const AcademicSemesterController = {
  createAcademicSemester,
  getAcademicSemester,
  getAcademicSemesterbyId,
  updateAcademicSemester,
};
