import {handleActions} from 'redux-actions'

import {SERVICES_SUCCESS} from '../actions/services';
import categoriesData from '../../data/services/services'

const defaultState = categoriesData

const categories = handleActions({
    [SERVICES_SUCCESS](state, {payload}) {
        return payload
    }
}, defaultState)

export default categories;
