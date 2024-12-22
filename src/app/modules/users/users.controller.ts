import { NextFunction, Request, Response } from 'express';
import { userService } from './users.service';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentDetails } = req.body; //studentDetails is a name alis for student
    // const zodValidation = studentSchema.parse(studentDetails);

    // const { error, value } = studentSchema.validate(studentDetails);

    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'Something went wrong',
    //     error: error.details,
    //   });
    // }
    // creating a user

    const result = await userService.createStudentIntoDb(
      password,
      studentDetails,
    );
    res.status(200).json({
      success: true,
      message: 'Student Created Successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
  //   controller will call service funtion {service.ts} to send this data
};

export const UserControllers = {
  createStudent,
};
