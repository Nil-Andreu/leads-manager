import { combineReducers } from "redux";
import leads from './leads'
import errors from './errors'

export default combineReducers( {
    leadsReducer : leads,
    errorsReducer : errors,
})