import { SAVE_ANSWER } from "../constants";

const initialState = {
    quiz: []
}

const rootReducer = (state = initialState, action: any) => {
    if ( action.type === SAVE_ANSWER ) {
        return Object.assign({}, state, {
            quiz: state.quiz.concat(action.payload)
        })
    }
    return state;
}

export default rootReducer;