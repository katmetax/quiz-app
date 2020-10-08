import { SAVE_ANSWER } from "../constants";

export const saveAnswer = (payload: questionResponse) => {
    return { type: SAVE_ANSWER, payload }
};
