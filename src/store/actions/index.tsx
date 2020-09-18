import { SAVE_ANSWER } from "../constants";

interface questionResponse {
    question: string;
    answer: string;
}

export const saveAnswer = (payload: questionResponse) => {
    return { type: SAVE_ANSWER, payload }
};
