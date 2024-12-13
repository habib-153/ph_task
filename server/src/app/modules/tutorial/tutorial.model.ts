import { Schema, model } from 'mongoose';
import { TTutorial } from './tutorial.interface';

const tutorialSchema = new Schema<TTutorial>({
    link: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    }
});

export const Tutorial = model<TTutorial>('Tutorial', tutorialSchema);