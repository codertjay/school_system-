import axios from 'axios';
import * as actionTypes from './actionTypes';



const getASNTDetailStart = () => {
    return {
        type: actionTypes.GET_ASSIGNMENT_DETAIL_START
    }
}

const getASNTDetailSuccess = assignment => {
    return {
        type: actionTypes.GET_ASSIGNMENT_DETAIL_SUCCESS ,
        assignment
    }
}

const getASNTDetailFail = error => {
    return {
        type: actionTypes.GET_ASSIGNMENT_LIST_FAIL ,
        error: error
    }
}


export const getASNTSDetail = (token,id) => {
    return dispatch => {
        dispatch(getASNTDetailStart())
        console.log ('detail start ')
        axios.defaults.headers = {
            "Content-Type": "application/json",
            "Authorization" : `Token ${token}`
        }
        axios.get(`http://127.0.0.1:8000/assignments/${id}/`)
            .then(res => {
                const assignment = res.data
                dispatch(getASNTDetailSuccess(assignment))
                console.log (assignment)
            })
            .catch(err =>{
                dispatch(getASNTDetailFail(err))
            })
    }
}















