import {combineReducers} from "@reduxjs/toolkit";
import {appReducer} from "../APP/App-reducer";
import {paramsReducer} from "../Components/Header/ParamsReducer";
import {tableReducer} from "../TablePage/TableReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    table: tableReducer,
    params: paramsReducer
})