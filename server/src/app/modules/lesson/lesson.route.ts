import express from 'express';
import { LessonController } from './lesson.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
    '/create-lesson',
    auth('admin', 'user'),
    LessonController.createLesson
);

router.get('/', LessonController.getAllLessons);

router.get('/:id', LessonController.getSingleLesson);

router.patch(
    '/:id',
    auth('admin', 'user'),
    LessonController.updateLesson
);

router.delete(
    '/:id',
    auth('admin', 'user'),
    LessonController.deleteLesson
);

export const lessonRoutes = router;