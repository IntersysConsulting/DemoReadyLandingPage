import {createAction} from 'redux-actions'

export const DEMOS_REQUEST = () => dispatch => {
    const data = require("./../../data/categories/demos");
    return dispatch(DEMOS_SUCCESS(data));
}

export const DEMOS_SUCCESS = createAction('DEMOS_SUCCESS');
export const DEMOS_ERROR = createAction('DEMOS_ERROR');