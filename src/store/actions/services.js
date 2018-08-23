import {createAction} from 'redux-actions'

export const SERVICES_REQUEST = () => dispatch => {
    const data = require("./../../data/services/services");
    return dispatch(SERVICES_SUCCESS(data));
}

export const SERVICES_SUCCESS = createAction('SERVICES_SUCCESS');
export const SERVICES_ERROR = createAction('SERVICES_ERROR');