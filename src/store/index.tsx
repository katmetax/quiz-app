import { createStore } from 'redux';
import rootReducer from './reducers';

import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools()); // TODO: configure composeWithDevTools to only show on edev env

export default store;