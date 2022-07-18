import React from 'react';
import {LinearProgress} from "@mui/material";
import s from './Spinner.module.scss'

const Spinner = () => {
    return (
        <div className={s.LinearProgress}>
            <LinearProgress/>
        </div>
    );
};

export default Spinner;