import { Router } from 'express';
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
];
routeModules.forEach((routes) => router.use(routes.path, routes.route));
// router.use('/students', studentRoutes);
// router.use('/users', userRoutes);
// router.use('/academic-sem', userRoutes);

export default router;
