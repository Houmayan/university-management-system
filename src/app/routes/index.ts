import { Router } from 'express';
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
];
routeModules.forEach((routes) => router.use(routes.path, routes.route));
router.use('/students', studentRoutes);
router.use('/users', userRoutes);

export default router;
