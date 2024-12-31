import { Router } from 'express';
import { academicDeptRoutes } from '../modules/academicDepartment/academicDept.route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSem.route';
import { studentRoutes } from '../modules/students/students.router';
import { userRoutes } from '../modules/users/users.route';

const router = Router();

const routeModules = [
  {
    path: '/students',
    route: studentRoutes,
  },
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/academic-semester',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/academic-departments',
    route: academicDeptRoutes,
  },
];
routeModules.forEach((routes) => router.use(routes.path, routes.route));
// router.use('/students', studentRoutes);
// router.use('/users', userRoutes);
// router.use('/academic-sem', userRoutes);

export default router;
