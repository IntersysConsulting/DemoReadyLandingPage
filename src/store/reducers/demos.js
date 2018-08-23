import {handleActions} from 'redux-actions'

import {DEMOS_SUCCESS} from './../actions/demos';
import demoData from './../../data/categories/demos'

const defaultState = demoData

const demos = handleActions({
    [DEMOS_SUCCESS](state, {payload}) {
        return payload
    }
}, defaultState)

export default demos;
