// import { HttpStatus } from 'http-status-ts';
import catchAsync from '../../utility/catchAsync';
import sendResponse from '../../utility/sendResponse';
import { StudentService } from './students.service';

const getAStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await StudentService.getAStudentFromDb(id);
  sendResponse(res, {
    statusCode: 200,
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
const getAllStudents = catchAsync(async (req, res) => {
  const result = await StudentService.getStudentsFromDb();
  res.status(200).json({
    success: true,
    message: 'Students retrived Successfully',
    data: result,
  });
});
const deleteAStudent = catchAsync(async (req, res) => {
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
