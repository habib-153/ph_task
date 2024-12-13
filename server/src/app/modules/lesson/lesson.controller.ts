import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { lessonService } from './lesson.service';

const createLesson = catchAsync(async (req, res) => {
    const result = await lessonService.addLesson(req.body);

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Lesson is created successfully',
        data: result,
    });
});

const getAllLessons = catchAsync(async (req, res) => {
    const result = await lessonService.getAllLessons(req.query);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Lessons are retrieved successfully',
        data: result,
    });
});

const getSingleLesson = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await lessonService.getSingleLesson(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Lesson is retrieved successfully',
        data: result,
    });
});

const updateLesson = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await lessonService.updateLesson(id, req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Lesson is updated successfully',
        data: result,
    });
});

const deleteLesson = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await lessonService.deleteLesson(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Lesson is deleted successfully',
        data: result,
    });
});

export const LessonController = {
    createLesson,
    getAllLessons,
    getSingleLesson,
    updateLesson,
    deleteLesson,
};