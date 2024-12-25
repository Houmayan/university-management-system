import { Request, Response } from 'express';
import catchAsync from '../../utility/catchAsync';
import sendResponse from '../../utility/sendResponse';

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const result = 'dfsadfasd';
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Academic Semester Created',
      data: result,
    });
  },
);

export const AcademicSemesterController = {
  createAcademicSemester,
};
