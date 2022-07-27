import { SET_SCHEDULE, LOAD_SCHEDULE, ERROR_SCHEDULE, CLEAR_ERROR_SCHEDULE, SET_SCHEDULE_TABLE, ADD_SCHEDULE, GET_CURRENT_SCHEDULE } from "../actionsNames";
import axios from "../../axios";
import { baseURL } from "./baseURL";

export const getScheduleData = () => dispatch => {
    axios
        .get(`${baseURL}/schedule`,)
        .then(({ data }) =>  dispatch(setData(data)))
        .catch((e) => dispatch(errorSchedule(e)));
}

export const addSchedule = ({ schedule, ...presentor }) => dispatch => {
    axios
        .post(`${baseURL}/schedule`, { schedule, presentor },)
        .then(({ data }) => dispatch(addScheduleSuccess(schedule,data)))
        .catch((e) => dispatch(errorSchedule(e)));
}

export const changeScheduleTable = ({ _id, ...presentor }) => dispatch => {
    axios
        .put(`${baseURL}/schedule/${_id}`, {...presentor },)
        .then(({ data }) => dispatch(changeScheduleTableSuccess(data, _id, presentor.shedule)))
        .catch((e) => dispatch(errorSchedule(e)));
}

export const getCurrentSchedule = () => dispatch => {
    axios
        .get(`${baseURL}/schedule/current`,)
        .then(({ data }) => dispatch(getCurrentScheduleSucess(data)))
        .catch((e) => dispatch(errorSchedule(e)));
}

export const clearError = () => ({ type: CLEAR_ERROR_SCHEDULE });


const getCurrentScheduleSucess = (current_schedule) => ({ type: GET_CURRENT_SCHEDULE, payload: { current_schedule } });

const errorSchedule = (e) => ({ type: ERROR_SCHEDULE, payload: { error: "Error" } });

const loadSchedule = () => ({ type: LOAD_SCHEDULE });

const changeScheduleTableSuccess = (data, _id, shedule) => ({ type: SET_SCHEDULE_TABLE, payload: { data, _id, shedule } });

const addScheduleSuccess = (schedule, data) => ({ type: ADD_SCHEDULE, payload: { schedule, data } });

const setData = (schedule_data) => ({ type: SET_SCHEDULE, payload: { schedule_data } });