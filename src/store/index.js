import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './reducers'

const middlewares = [ReduxThunk];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;