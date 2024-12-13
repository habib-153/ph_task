import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { User } from "../user/user.model";
import { TVocabulary } from "./vocabulary.interface";
import { Vocabulary } from "./vocabulary.model";
import { Lesson } from "../lesson/lesson.model";
import mongoose from 'mongoose';

const createVocabulary = async(payload: TVocabulary) => {
    const session = await mongoose.startSession();
    try {
        session.startTransaction();

        const user = await User.isUserExistsByEmail(payload.adminEmail);
        if (!user) {
            throw new AppError(httpStatus.NOT_FOUND, 'User not found');
        }

        const lesson = await Lesson.findById(payload.lesson);
        if (!lesson) {
            throw new AppError(httpStatus.NOT_FOUND, 'Lesson not found');
        }

        await Lesson.findByIdAndUpdate(
            lesson._id,
            { $inc: { vocabularyCount: 1 } },
            { session }
        );

        const vocabulary = await Vocabulary.create([payload], { session });
        
        await session.commitTransaction();
        return vocabulary[0];
    } catch (error) {
        await session.abortTransaction();
        throw error;
    } finally {
        session.endSession();
    }
}

const getALlVocabulary = async() => {
    const vocabulary = Vocabulary.find();
    return vocabulary;
}

const getVocabularyById = async(id:string) => {
    const vocabulary = Vocabulary.findById(id);
    return vocabulary;
}

const updateVocabulary = async(id:string, payload:TVocabulary) => {
    const vocabulary = Vocabulary.findByIdAndUpdate(id, payload, {new: true})
    return vocabulary;
}

const deleteVocabulary = async(id: string) => {
    const session = await mongoose.startSession();
    try {
        session.startTransaction();

        const vocabulary = await Vocabulary.findById(id);
        if (!vocabulary) {
            throw new AppError(httpStatus.NOT_FOUND, 'Vocabulary not found');
        }

        await Lesson.findByIdAndUpdate(
            vocabulary.lesson,
            { $inc: { vocabularyCount: -1 } },
            { session }
        );

        const deletedVocabulary = await Vocabulary.findByIdAndDelete(id).session(session);
        
        await session.commitTransaction();
        return deletedVocabulary;
    } catch (error) {
        await session.abortTransaction();
        throw error;
    } finally {
        session.endSession();
    }
}

export const vocabularyService = {
    createVocabulary,
    getALlVocabulary,
    getVocabularyById,
    updateVocabulary,
    deleteVocabulary
}