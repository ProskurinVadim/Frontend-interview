import { ADD_TABLE, CHANGE_TABLE, DELETE_TABLE, SET_TABLES, LOAD_TABLE, ERROR_TABLE, CLEAR_ERROR_TABLE } from "../actionsNames";
import axios from "../../axios";
import { baseURL } from "./baseURL";

export const getTableData = () => dispatch => {
    axios
        .get(`${baseURL}/table`,)
        .then(({ data }) => dispatch(setData(data)))
        .catch((e) => dispatch(errorTable(e)));
}

export const addImage = (id,file) => dispatch => {
    axios
        .post(`${baseURL}/table/image/${id}`, file, { headers: { "Content-Type": "multipart/form-data"}})
        .then(({ data }) => dispatch(addTableSuccess(data)))
        .catch((e) => dispatch(errorTable(e)));
}

//dispatch(addTableSuccess(data))

export const addTable = (table, file) => dispatch => {
    axios
        .post(`${baseURL}/table`, table,)
        .then(({ data }) => file ? dispatch(addImage(data._id, file)) : dispatch(addTableSuccess(data)))
        .catch((e) => dispatch(errorTable(e)));
}

export const deleteTable = (_id, index) => dispatch => {
    axios
        .delete(`${baseURL}/table/${_id}`)
        .then(() => dispatch(deleteTableSuccess(index)))
        .catch((e) => dispatch(errorTable(e)));
}

export const changeTable = ({ _id, aditional_label, ...table }, file) => dispatch => {
    console.log(file)
    axios
        .put(`${baseURL}/table/${_id}`, table)
        .then(() => file ? dispatch(changeImage(file, _id)) : dispatch(addTableSuccess(table, _id)))
        .catch((e) => dispatch(errorTable(e)));
}
export const changeImage = (file,id) => dispatch => {
    axios
        .post(`${baseURL}/table/image/${id}`, file, { headers: { "Content-Type": "multipart/form-data" } })
        .then(({ data }) => dispatch(changeTableSuccess(data,id)))
        .catch((e) => dispatch(errorTable(e)));
}

export const clearError = () => ({ type: CLEAR_ERROR_TABLE });


const errorTable = (e) => ({ type: ERROR_TABLE, payload: { error: "Error" } });

const loadTable = () => ({ type: LOAD_TABLE });

const changeTableSuccess = (table, _id) => ({ type: CHANGE_TABLE, payload: { table, _id } });

const deleteTableSuccess = index => ({ type: DELETE_TABLE, payload: { index } });

const addTableSuccess = table => ({ type: ADD_TABLE, payload: { table } });

const setData = (data) => ({ type: SET_TABLES, payload: { data } });