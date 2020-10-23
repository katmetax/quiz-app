import { createStore } from 'redux';
import rootReducer from './reducers';

import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools()); // TODO: configure composeWithDevTools to only show on dev env

export default store;