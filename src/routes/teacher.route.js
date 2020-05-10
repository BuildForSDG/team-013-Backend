import { Router } from 'express';
import { TeacherController } from '../controllers';
import { upload, authenticate, permit } from '../middleware';

const router = Router();
const { login, logOut, deleteAll, deleteOne, readAll, readOne, register, update, readAllApprovedTeachers } = new TeacherController();

router.route('/login').post(login);
router.route('/logout').get(authenticate, logOut);
router
  .route('/teachers')
  .get(authenticate, permit(['admin']), readAll)
  .post(upload.single('image'), register)
  .delete(authenticate, permit(['admin']), deleteAll);
router
  .route('/teachers/me')
  .get(authenticate, permit(['admin', 'user']), readOne)
  .delete(authenticate, permit(['admin', 'user']), deleteOne)
  .put(upload.single('image'), authenticate, permit(['admin', 'user']), update);

router.get('/teachers/approved', authenticate, permit(['admin']), readAllApprovedTeachers);

export default router;
