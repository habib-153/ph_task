import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { TutorialService } from './tutorial.service';

const createTutorial = catchAsync(async (req, res) => {
    const result = await TutorialService.addTutorial(req.body);

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Tutorial is created successfully',
        data: result,
    });
});

const getAllTutorials = catchAsync(async (req, res) => {
    const result = await TutorialService.getAllTutorials();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Tutorials are retrieved successfully',
        data: result,
    });
});

const getTutorial = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await TutorialService.getTutorialById(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Tutorial is retrieved successfully',
        data: result,
    });
});

const deleteTutorial = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await TutorialService.deleteTutorial(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Tutorial is deleted successfully',
        data: result,
    });
});

export const TutorialController = {
    createTutorial,
    getAllTutorials,
    getTutorial,
    deleteTutorial,
};