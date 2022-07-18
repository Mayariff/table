import React from 'react';
import TablePage from "../TablePage/TablePage";
import {useAppSelector} from "../Utils/redux-utils";
import {selectError, selectStatus} from "./selectors";
import Spinner from "../Components/Spinner/Spinner";
import {ErrorSnackbar} from "../Components/ErrorSnackbar/ErrorSnackbar";
import Header from "../Components/Header/Header";
import s from './App.module.scss'

function App() {
    const status = useAppSelector(selectStatus)
    const error = useAppSelector(selectError)


    return (
        <div className={s.layout}>
            <Header/>
            {status === 'loading' && <Spinner/>}
            <div className={s.container}>
                <TablePage/>
                {error && <ErrorSnackbar/>}
            </div>
        </div>
    );
}

export default App;
