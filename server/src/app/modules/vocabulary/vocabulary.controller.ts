import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { vocabularyService } from './vocabulary.service';
import catchAsync from '../../utils/catchAsync';

const createVocabulary = catchAsync(async (req, res) => {
    const result = await vocabularyService.createVocabulary(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Vocabulary is created successfully',
        data: result,
    });
});

const getAllVocabulary = catchAsync(async (req, res) => {
    const result = await vocabularyService.getALlVocabulary();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Vocabulary list is retrieved successfully',
        data: result,
    });
});

const getVocabularyById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await vocabularyService.getVocabularyById(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Vocabulary is retrieved successfully',
        data: result,
    });
});

const updateVocabulary = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await vocabularyService.updateVocabulary(id, req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Vocabulary is updated successfully',
        data: result,
    });
});

const deleteVocabulary = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await vocabularyService.deleteVocabulary(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Vocabulary is deleted successfully',
        data: result,
    });
});

export const vocabularyController = {
    createVocabulary,
    getAllVocabulary,
    getVocabularyById,
    updateVocabulary,
    deleteVocabulary
};