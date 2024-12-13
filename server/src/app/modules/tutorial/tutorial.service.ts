import { TTutorial } from "./tutorial.interface";
import { Tutorial } from "./tutorial.model";

const addTutorial = async(payload: TTutorial) => {
    const tutorial = await Tutorial.create(payload);
    return tutorial;
}

const getAllTutorials = async() => {
    const tutorials = await Tutorial.find();
    return tutorials;
}

const getTutorialById = async(id: string) => {
    const tutorial = await Tutorial.findById(id);
    return tutorial;
}

const deleteTutorial = async(id: string) => {
    const tutorial = await Tutorial.findByIdAndDelete(id);
    return tutorial;
}

export const TutorialService = {
    addTutorial,
    getAllTutorials,
    getTutorialById,
    deleteTutorial,
}