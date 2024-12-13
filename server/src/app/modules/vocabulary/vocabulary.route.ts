import express from 'express';
import { vocabularyController } from './vocabulary.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
    '/create-vocabulary',
    auth('admin', 'user'),
    vocabularyController.createVocabulary
);

router.get('/', vocabularyController.getAllVocabulary);

router.get('/:id', vocabularyController.getVocabularyById);

router.patch(
    '/:id',
    auth('admin', 'user'),
    vocabularyController.updateVocabulary
);

router.delete(
    '/:id',
    auth('admin', 'user'),
    vocabularyController.deleteVocabulary
);

export const vocabularyRoutes = router;