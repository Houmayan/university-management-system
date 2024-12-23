import { NextFunction, Request, RequestHandler, Response } from 'express';
import { HttpStatus } from 'http-status-ts';
import sendResponse from '../../utility/sendResponse';
import { StudentService } from './students.service';

const cathAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};

const getAStudent = cathAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await StudentService.getAStudentFromDb(id);
  sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    message: 'Student is created successfully',
    data: result,
  });
  // res.status(HttpStatus.OK).json({
  //   success: true,
  //   message: 'Students id deleted Successfully',
  //   data: result,
  // });
});
const getAllStudents = cathAsync(async (req, res, next) => {
  const result = await StudentService.getStudentsFromDb();
  res.status(200).json({
    success: true,
    message: 'Students retrived Successfully',
    data: result,
  });
});
const deleteAStudent = cathAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await StudentService.deleteStudentFromDb(id);
  res.status(200).json({
    success: true,
    message: 'Student deleted',
    data: result,
  });
});

export const StudentController = {
  getAStudent,
  getAllStudents,
  deleteAStudent,
};
