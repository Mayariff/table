import {AxiosError} from "axios";
import {setAppError, setAppStatus} from "../APP/App-reducer";

type ThunkAPIType = {
    dispatch: (action: any) => any
    rejectWithValue: Function
}


export type errorType = {
    error: {
        code: number
        details: string[]
        errors: string[]
        message: string
        status: string
    }
}


export const handleAsyncServerAppError = (data: AxiosError<errorType>,
                                          thunkAPI: ThunkAPIType) => {

    thunkAPI.dispatch(setAppError({error: data.response ? data.response?.data?.error.message : 'Some error occurred'}))
    thunkAPI.dispatch(setAppStatus({status: 'failed'}))
    return thunkAPI.rejectWithValue({error: data.response?.data?.error.message})
}