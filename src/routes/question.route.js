import { Router } from 'express';
import { QuestionsController } from '../controllers';
import { authenticate } from '../middleware';

const router = Router();
const {getQuestion} = new QuestionsController();

router.route('/questions').post(authenticate, getQuestion);

export default router;