import { NextFunction, Request, Response } from 'express';
import { HttpStatus } from 'http-status-ts';
import sendResponse from '../../utility/sendResponse';
import { StudentService } from './students.service';

const getAStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
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
  } catch (error) {
    next(error);
  }
};
const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentService.getStudentsFromDb();
    res.status(200).json({
      success: true,
      message: 'Students retrived Successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const deleteAStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await StudentService.deleteStudentFromDb(id);
    res.status(200).json({
      success: true,
      message: 'Student deleted',
      data: result,
    });
  } catch (error) {
    // console.log(error);
    next(error);
  }
};

export const StudentController = {
  getAStudent,
  getAllStudents,
  deleteAStudent,
};
