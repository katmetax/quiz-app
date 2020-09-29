import { SAVE_ANSWER } from "../constants";

const initialState = '';

const rootReducer = (state = initialState, action: any) => {
    if ( action.type === SAVE_ANSWER ) {
        return Object.assign({}, state, {
            state: action.payload
        })
    }
    return state;
}

export default rootReducer;