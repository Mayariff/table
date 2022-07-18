export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

//tests
export type APPInitialStateType = {
    status: RequestStatusType,
    error: null | string,
}