import { Request, Response } from 'express';
import catchAsync from '../../utility/catchAsync';
import sendResponse from '../../utility/sendResponse';
import { AcademicDepartmentService } from './academicDept.service';

const createAcademicDept = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicDepartmentService.createAcademicDeptIntoDb(
    req.body,
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
    message: 'Academic Department created successfully',
  });
});

const getSingleAcademicDept = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result =
      await AcademicDepartmentService.getSingleAcademicDeptFromDb(id);
    sendResponse(res, {
      statusCode: 200,
      message: 'Academic Department fetched successfully',
      success: true,
      data: result,
    });
  },
);

const getAllAcademicDept = catchAsync(async (req: Request, res: Response) => {
  const result =
    await AcademicDepartmentService.getAllAcademicDepartmentsFromDb();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
    message: 'Academic Department fetched successfully',
  });
});

const UpdateAcademicDept = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await AcademicDepartmentService.updateAcademicDepartment(
    id,
    req.body,
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
    message: 'Academic Department updated successfully',
  });
});

export const AcademicDepartmentController = {
  createAcademicDept,
  getSingleAcademicDept,
  getAllAcademicDept,
  UpdateAcademicDept,
};
