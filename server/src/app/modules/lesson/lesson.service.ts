import mongoose from "mongoose";
import QueryBuilder from "../../builder/QueryBuilder";
import { Vocabulary } from "../vocabulary/vocabulary.model";
import { TLesson } from "./lesson.interface";
import { Lesson } from "./lesson.model";

const addLesson = async(payload: TLesson) => {
    const lesson = await Lesson.create(payload);
    return lesson;
}

const getAllLessons = async(query: Record<string, unknown>) => {
    const searchableFields = ['name']
    const lessons = new QueryBuilder(Lesson.find(), query).search(searchableFields).filter().paginate().sort().fields()
    const result = await lessons.modelQuery
    const meta = await lessons.countTotal()

    return {result, meta};
}

const updateLesson = async(id:string, payload: Partial<TLesson>) => {
    const lesson = await Lesson.findByIdAndUpdate(id, payload, {new: true})
    return lesson
}

const getSingleLesson = async(id: string) => {
    const lesson = await Lesson.findById(id);
    return lesson;
}

const deleteLesson = async(id: string) => {
    const session = await mongoose.startSession();
    try {
        session.startTransaction();
        
        const deleteVocabularies = await Vocabulary.deleteMany({ lesson: id }).session(session);
        
        const deletedLesson = await Lesson.findByIdAndDelete(id).session(session);
        
        await session.commitTransaction();
        
        return {
            lesson: deletedLesson,
            deletedVocabulariesCount: deleteVocabularies.deletedCount
        };
    } catch (error) {
        await session.abortTransaction();
        throw error;
    } finally {
        session.endSession();
    }
}

export const lessonService = {
    addLesson,
    getAllLessons,
    updateLesson,
    getSingleLesson,
    deleteLesson
}