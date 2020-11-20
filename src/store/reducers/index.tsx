import { SAVE_ANSWER } from "../constants";

interface quizReducer {
    quiz: questionResponse[];
}

export const initialState: quizReducer = { quiz: [] };

// TODO: Refactor reducer

const rootReducer = (state = initialState, action: saveAnswerInterface):quizReducer  => {
    if ( action.type === SAVE_ANSWER ) {
        const newArray = state.quiz.concat(action.payload);

        const newPayload = newArray.filter((item: questionResponse) => {
            return !(item.questionNo === action.payload.questionNo && item.answer !== action.payload.answer);
        }).sort((prevItem: questionResponse, currentItem: questionResponse) => {
            return prevItem.questionNo - currentItem.questionNo;
        }).filter((item: questionResponse, index: number, arr: questionResponse[]) => {
            const prevIndex = index - 1;
            return prevIndex !== -1 ? item.questionNo !== arr[prevIndex].questionNo : item;
        });

        return Object.assign({}, state, { quiz: newPayload });
    }
    
    return state;
}

export default rootReducer;
