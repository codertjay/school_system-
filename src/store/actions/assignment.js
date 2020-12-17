import axios from 'axios';
import * as actionTypes from './actionTypes';

export const getASNTListStart = () => {
    return {
        type: actionTypes.GET_ASSIGNMENT_LIST_START
    }
}

export const getASNTListSuccess = assignments => {
    return {
        type: actionTypes.GET_ASSIGNMENT_LIST_SUCCESS ,
        assignments
    }
}

export const getASNTListFail = error => {
    return {
        type: actionTypes.GET_ASSIGNMENT_LIST_FAIL ,
        error: error
    }
}


export const getASNTS = token => {
    return dispatch => {
        dispatch(getASNTListStart())
        axios.defaults.headers = {
            "Content-Type": "application/json",
            "Authorization" : `Token ${token}`
        }
        axios.get(`http://127.0.0.1:8000/assignments/`)
            .then(res => {
                const assignments = res.data
                dispatch(getASNTListSuccess(assignments))
            })
            .catch(err =>{
                dispatch(getASNTListFail(err))
            })
    }
}















