import { Request, Response } from 'express';
import { StudentService } from './students.service';
const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentDetails } = req.body; //studentDetails is a name alis for student
    // const zodValidation = studentSchema.parse(studentDetails);

    // const { error, value } = studentSchema.validate(studentDetails);

    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'Something went wrong',
    //     error: error.details,
    //   });
    // }
    const result = await StudentService.createStudentIntoDb(studentDetails);
    res.status(200).json({
      success: true,
      message: 'Student Created Successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something wrong',
    });
  }
  //   controller will call service funtion {service.ts} to send this data
};

const getAStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await StudentService.getAStudentFromDb(id);
    res.status(200).json({
      success: true,
      message: 'Students id deleted Successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getStudentsFromDb();
    res.status(200).json({
      success: true,
      message: 'Students retrived Successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const deleteAStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await StudentService.deleteStudentFromDb(id);
    res.status(200).json({
      success: true,
      message: 'Student deleted',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentController = {
  createStudent,
  getAStudent,
  getAllStudents,
  deleteAStudent,
};
