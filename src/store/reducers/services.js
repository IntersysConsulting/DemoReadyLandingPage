import {handleActions} from 'redux-actions'

import {SERVICES_SUCCESS} from './../actions/services';
import servicesData from './../../data/services/services'

const defaultState = servicesData

const services = handleActions({
    [SERVICES_SUCCESS](state, {payload}) {
        return payload
    }
}, defaultState)

export default services;
