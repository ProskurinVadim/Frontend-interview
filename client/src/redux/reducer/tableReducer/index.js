import { ADD_TABLE, CHANGE_TABLE, DELETE_TABLE, SET_TABLES, LOAD_TABLE, ERROR_TABLE, CLEAR_ERROR_TABLE } from "../../actionsNames";

const initialState = {
    data: [],
    error: "",
    loading: false,
};

export default function (state = initialState, { type, payload }) {
    switch (type) {

        case SET_TABLES: {
            return {
                ...state,
                data: payload.data,
                scheduled_data: payload.scheduled_data,
                loading: false
            }
        }

        case CHANGE_TABLE: {
            const newData = [...state.data].map(elem => (
                elem._id === payload._id ? payload.table : elem
            ))
            return {
                ...state,
                data: newData
            }
        }

        case DELETE_TABLE: {
            const newData = [...state.data];
            newData.splice(payload.index, 1);
            return {
                ...state,
                data: newData
            }
        }

        case ADD_TABLE: {
            return {
                ...state,
                data: [...state.data, payload.table]
            }
        }

        case LOAD_TABLE: {
            return {
                ...state,
                loading: true
            }
        }

        case ERROR_TABLE: {
            return {
                ...state,
                loading: false,
                error: payload.error
            }
        }

        case CLEAR_ERROR_TABLE: {
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