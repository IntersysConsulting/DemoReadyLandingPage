import {combineReducers} from 'redux'
import demos from './demos'
import categories from './categories'

const rootReducer = combineReducers({
    demos,
    categories
})

export default rootReducer