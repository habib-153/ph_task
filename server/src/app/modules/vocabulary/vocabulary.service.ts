import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { User } from "../user/user.model";
import { TVocabulary } from "./vocabulary.interface";
import { Vocabulary } from "./vocabulary.model";

const createVocabulary = async(payload: TVocabulary) => {
    const user = await User.isUserExistsByEmail(payload.adminEmail);
    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }

    // const lesson = await Lesson.findById(payload._id)
    // if (!lesson) {
    //     throw new AppError(httpStatus.NOT_FOUND, 'Lesson not found');
    // }

    const vocabulary = Vocabulary.create(payload)
    return vocabulary;
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

const deleteVocabulary = async(id:string) => {
    const vocabulary = Vocabulary.findByIdAndDelete(id);
    return vocabulary;
}

export const vocabularyService = {
    createVocabulary,
    getALlVocabulary,
    getVocabularyById,
    updateVocabulary,
    deleteVocabulary
}