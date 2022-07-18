import {rootReducer} from "../Store/RootReducer";
import {store} from "../Store/store";


export type RootReducerType = typeof rootReducer
export type AppRootStateType = ReturnType<RootReducerType>
export type AppDispatchType = typeof store.dispatch
