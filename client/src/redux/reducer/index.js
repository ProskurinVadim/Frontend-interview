import {combineReducers} from "redux";
import authReducer from "./authReducer";
import tableReducer from "./tableReducer";
import presentorReducer from "./presentorReducer";
import scheduleReducer from "./scheduleReducer";

export default combineReducers({
    auth: authReducer,
    table: tableReducer,
    presentor: presentorReducer,
    schedule: scheduleReducer,
})