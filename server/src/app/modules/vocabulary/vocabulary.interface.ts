import { Types } from "mongoose";

export type TVocabulary = {
    _id?: string;
    word: string;
    pronunciation: string;
    whenToSay: string;
    lesson: Types.ObjectId
    adminEmail: string;
}