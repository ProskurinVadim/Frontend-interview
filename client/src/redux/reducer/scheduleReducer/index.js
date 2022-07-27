import { SET_SCHEDULE, LOAD_SCHEDULE, ERROR_SCHEDULE, CLEAR_ERROR_SCHEDULE, SET_SCHEDULE_TABLE, ADD_SCHEDULE, GET_CURRENT_SCHEDULE } from "../../actionsNames";

const initialState = {
    schedule_data: {
        "morning": [],
        "night": [],
        "afternoon": [],
    },
    curret_schedule: [],
    error: "",
    loading: false,
};

export default function (state = initialState, { type, payload }) {
    switch (type) {

        case SET_SCHEDULE: {
            return {
                ...state,
                schedule_data: { ...payload.schedule_data },
            }
        }

        case SET_SCHEDULE_TABLE: {
            const newDate = [...state.schedule_data];
            newDate[payload.schedule] = newDate[payload.schedule].map(elem => elem._id !== payload._id ? elem : payload.data);
            return {
                ...state,
                data: [...newDate]
            }
        }

        case ADD_SCHEDULE: {
            const { schedule, data } = payload
            const newSchedule_data = { ...state.schedule_data };
            newSchedule_data[schedule] = [...newSchedule_data[schedule], data]
            return {
                ...state,
                schedule_data: newSchedule_data
            }
        }

        case GET_CURRENT_SCHEDULE: {
            return {
                ...state,
                curret_schedule: payload.curret_schedule
            }
        }

        case LOAD_SCHEDULE: {
            return {
                ...state,
                loading: true
            }
        }

        case ERROR_SCHEDULE: {
            return {
                ...state,
                loading: false,
                error: payload.error
            }
        }

        case CLEAR_ERROR_SCHEDULE: {
            return {
                ...state,
                error: ""
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}