import { LOGIN_LOAD, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT, LOGIN_CLEAR_ERROR} from "../../actionsNames";

const initialState = {
    login : "",
    error : "",
    token : false,
    loading: false,
};

export default function (state=initialState,{type, payload}) {
    switch (type) {
        case LOGIN_LOAD : {
            return {
                ...state,
                loading : true,
            }
        }
        case LOGIN_SUCCESS : {
            return {
                ...state,
                loading : false,
                login: payload.login
            }
        }
        case LOGIN_FAILED: {
            return {
                ...state,
                error : payload.error,
                loading : false
            }
        }
        case LOGOUT : {
            return {
                ...initialState
            }
        }
        case LOGIN_CLEAR_ERROR : {
            return {
                ...state,
                error : ""
            }
        }
        default : {
            return {
                ...state
            }
        }

    }

}