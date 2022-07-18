import {AppRootStateType} from "../Utils/redux-types";

export const selectStatus = (state: AppRootStateType) => state.app.status
export const selectError = (state: AppRootStateType) => state.app.error