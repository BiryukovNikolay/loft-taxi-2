import { LOG_OUT, LOG_IN, LOG_IN_ERROR } from '../actions/authActions';

const initialState = {
    isLoggedIn: !!localStorage.getItem('token'),
    token: localStorage.getItem('token'),
    error: '',
}
 
export default function(state = initialState, action) {
    switch(action.type) {
        case LOG_IN: {
            return {...state, isLoggedIn: true, error: '', token: action.payload}
        }
        case LOG_IN_ERROR: {
            return {...state, isLoggedIn: false, error: action.payload}
        }
        case LOG_OUT: {
            return {...state, isLoggedIn: false, token: ''}
        }
        default: {
            return state
        }
    }
}
