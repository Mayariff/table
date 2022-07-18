import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {itemType, ParamsType} from "../API/types";
import {setAppStatus} from "../APP/App-reducer";
import {tableAPI} from "../API/tableAPI";
import {errorType, handleAsyncServerAppError} from "../Utils/error-utils";


export const fetchItems = createAsyncThunk('tableReducer/fetchItems',
    async (params: ParamsType, thunkAPI) => {
        thunkAPI.dispatch(setAppStatus({status: 'loading'}))
        try {
            const res = await tableAPI.getTableData(params)
            thunkAPI.dispatch(setAppStatus({status: 'succeeded'}))
            return {items: res.data}
        } catch (er) {
            const error = er as AxiosError<errorType, any>
            return handleAsyncServerAppError(error, thunkAPI)
        }
    })


export const addNewBatchItems = createAsyncThunk('tableReducer/addNewBatchItems',
    async (params: ParamsType, thunkAPI) => {
        thunkAPI.dispatch(setAppStatus({status: 'loading'}))
        try {
            const res = await tableAPI.getTableData(params)
            thunkAPI.dispatch(setAppStatus({status: 'succeeded'}))
            return {items: res.data}
        } catch (er) {
            const error = er as AxiosError<errorType, any>
            return handleAsyncServerAppError(error, thunkAPI)
        }
    })

export const slice = createSlice({
    name: 'tableReducer',
    initialState: {
        items: [] as itemType[]
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchItems.fulfilled, (state, action) => {
            return action.payload
        })
        builder.addCase(addNewBatchItems.fulfilled, (state, action) => {
            state.items.push(...action.payload.items)
        })
    }
})

export const tableReducer = slice.reducer;