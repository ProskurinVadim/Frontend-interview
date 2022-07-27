import { LOGIN_LOAD, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT, LOGIN_CLEAR_ERROR } from "../actionsNames";
import axios from "../../axios";
import { baseURL } from "./baseURL";
export const authLogin = (login, password) => dispatch => {
    dispatch(authLoading());
    return axios
        .post(`${baseURL}/auth/login`, { login, password })
        .then(({ data }) => {
            localStorage.setItem('token', JSON.stringify(data.token));
            dispatch(authSuccess(data.login));
        })
        .catch((error) => {
            dispatch(authFailed(error.response.data.message));
        })
};

export const authRegistration = (login, password) => dispatch => {
    dispatch(authLoading());
    return axios
        .post(`${baseURL}/auth/register`, { login, password })
        .then(({ data }) => {
            localStorage.setItem('token', JSON.stringify(data.token));
            dispatch(authSuccess(data.login));
        })
        .catch((error) => {
            dispatch(authFailed(error.response.data.message));
        })
    
};

export const clearError = () => ({ type: LOGIN_CLEAR_ERROR });
export const authLogout = () => ({ type: LOGOUT });

const authSuccess = (login) => ({ type: LOGIN_SUCCESS, payload: { login }});
const authLoading = () => ({ type: LOGIN_LOAD});
const authFailed = (error) => ({type:LOGIN_FAILED,payload:{error}});