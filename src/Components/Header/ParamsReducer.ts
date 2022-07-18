import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {columnType, ParamsType, sortType} from "../../API/types";


const slice = createSlice({
    name: 'params',
    initialState: {
        params: {
            page: 1,
            size: 5,
            column: '' as columnType,
            sort: '' as sortType,
            searchingValue: '' as string | number,
        }
    },
    reducers: {
        setParams(state, action: PayloadAction<ParamsType>) {
            state.params = {...state.params, ...action.payload}
        },
    },


})

export const paramsReducer = slice.reducer;
export const {setParams} = slice.actions