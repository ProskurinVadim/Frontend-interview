import { SET_PRESENTORS, ADD_PRESENTOR, DELETE_PRESENTOR, CHANGE_PRESENTOR, SET_PRESENTOR_SCHEDULE, LOAD_PRESENTOR, ERROR_PRESENTOR, CLEAR_ERROR_PRESENTOR } from "../actionsNames";
import axios from "../../axios";
import { baseURL } from "./baseURL";

export const getPresentorsData = () => dispatch => {
    axios
        .get(`${baseURL}/presentor`,)
        .then(({ data }) => {
            dispatch(setData(data));
        })
        .catch((e) => dispatch(errorPresentor(e)));
}

export const addPresentorImage = (id, file) => dispatch => {
    axios
        .post(`${baseURL}/presentor/image/${id}`, file, { headers: { "Content-Type": "multipart/form-data" } })
        .then(({ data }) => dispatch(addPresentorSuccess(data)))
        .catch((e) => dispatch(errorPresentor(e)));
}

export const addPresentor = ({ _id,...presentor}, file) => dispatch => {
    axios
        .post(`${baseURL}/presentor`, presentor,)
        .then(({ data }) => {
            file ? dispatch(addPresentorImage(data._id, file)) : dispatch(addPresentorSuccess(data));
        })
        .catch((e) => dispatch(errorPresentor(e)));
}

export const deletePresentor = (_id, index) => dispatch => {
    axios
        .delete(`${baseURL}/presentor/${_id}`,)
        .then(() => dispatch(deletePresentorSuccess(index)))
        .catch((e) => dispatch(errorPresentor(e)));
}

export const changePresentor = ({ _id, ...presentor },file) => dispatch => {
    axios
        .put(`${baseURL}/presentor/${_id}`, presentor,)
        .then(({ data }) => {
            console.log(file,"file")
            file ? dispatch(changePresentorImage(_id, file)) : dispatch(changePresentorSuccess(data, _id));
        })
        .catch((e) => dispatch(errorPresentor(e)));
}

export const changePresentorImage = (id, file) => dispatch => {
    axios
        .post(`${baseURL}/presentor/image/${id}`, file, { headers: { "Content-Type": "multipart/form-data" } })
        .then(({ data }) => dispatch(changePresentorSuccess(data,id)))
        .catch((e) => dispatch(errorPresentor(e)));
}

export const clearError = () => ({ type: CLEAR_ERROR_PRESENTOR });


const errorPresentor = (e) => ({ type: ERROR_PRESENTOR, payload: { error: "Error" } });

const loadPresentor = () => ({ type: LOAD_PRESENTOR });

const changePresentorSuccess = (presentor, _id) => ({ type: CHANGE_PRESENTOR, payload: { presentor, _id } });

const deletePresentorSuccess = index => ({ type: DELETE_PRESENTOR, payload: { index } });

const addPresentorSuccess = presentor => ({ type: ADD_PRESENTOR, payload: { presentor } });

const setData = ( presentors) => ({ type: SET_PRESENTORS, payload: {  presentors } });