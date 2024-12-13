import express from 'express';
import { TutorialController } from './tutorial.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
    '/create-tutorial',
    auth('admin', 'user'),
    TutorialController.createTutorial
);

router.get('/', TutorialController.getAllTutorials);

router.get('/:id', TutorialController.getTutorial);

router.delete(
    '/:id',
    auth('admin', 'user'),
    TutorialController.deleteTutorial
);

export const tutorialRoutes = router;