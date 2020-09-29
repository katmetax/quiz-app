import { SAVE_ANSWER } from "../constants";

const initialState: any = [];

const rootReducer = (state = initialState, action: any) => {
    if ( action.type === SAVE_ANSWER ) {
        return [ 
            ...state, 
            { quiz: action.payload }
        ]
    }
    return state;
}

export default rootReducer;