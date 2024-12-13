import { Schema, model } from 'mongoose';
import { TLesson } from './lesson.interface';

const lessonSchema = new Schema<TLesson>(
  {
    name: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    vocabularyCount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Lesson = model<TLesson>('Lesson', lessonSchema);