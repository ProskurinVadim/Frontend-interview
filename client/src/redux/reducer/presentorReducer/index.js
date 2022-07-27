import { SET_PRESENTORS, ADD_PRESENTOR, DELETE_PRESENTOR, CHANGE_PRESENTOR, LOAD_PRESENTOR, ERROR_PRESENTOR, CLEAR_ERROR_PRESENTOR } from "../../actionsNames";

const initialState = {
    presentors: [],
    error: "",
    loading: false,
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case SET_PRESENTORS: {
            return {
                ...state,
                presentors: payload.presentors,
                loading: false,
            }
        }
        case ADD_PRESENTOR: {
            return {
                ...state,
                presentors: [...state.presentors, payload.presentor],
            }
        }
        case DELETE_PRESENTOR: {
            const newData = [...state.presentors];
            newData.splice(payload.index, 1);
            return {
                ...state,
                presentors: newData,
            }
        }
        case CHANGE_PRESENTOR: {
            const newData = [...state.presentors].map(elem => (
                elem._id === payload._id ? payload.presentor : elem
            ))
            console.log(newData,"__")
            return {
                ...state,
                presentors: newData
            }
        }
        case LOAD_PRESENTOR: {
            return {
                ...state,
                loading: true
            }
        }
        case ERROR_PRESENTOR: {
            return {
                ...state,
                error: payload.error,
                loading: false
            }
        }
        case CLEAR_ERROR_PRESENTOR: {
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