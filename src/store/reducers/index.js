import {combineReducers} from 'redux'
import demos from './demos'
import services from './services'

const rootReducer = combineReducers({
    demos,
    services
})

export default rootReducer