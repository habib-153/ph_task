import { model, Schema } from 'mongoose';
import { TVocabulary } from './vocabulary.interface';

export const vocabularySchema = new Schema<TVocabulary>(
  {
    word: {
      type: String,
      required: true,
    },
    pronunciation: {
      type: String,
      required: true,
    },
    whenToSay: {
      type: String,
      required: true,
    },
    lesson: {
      type: Schema.Types.ObjectId,
      ref: 'Lesson',
      required: true,
    },
    adminEmail: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const Vocabulary = model<TVocabulary>('Vocabulary', vocabularySchema);