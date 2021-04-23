import { combineReducers} from "redux";
// Reducer
import bookReducer from "./bookReducer.js";

export default combineReducers({
    bookReducer: bookReducer
});