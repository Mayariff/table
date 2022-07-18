import React from 'react';
import s from './Filter.module.scss'
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {propsType} from "./type";


const Filter = React.memo(({nameFilter, selectorValues, selectValue, value, label, limitingValue}: propsType) => {

    const onChangeHandler = (e: SelectChangeEvent) => {
        selectValue(e.target.value)
    }

    return (
        <div className={s.filter}>
            <FormControl fullWidth sx={{m: 1, minWidth: 220,}} size="small">
                <InputLabel id={nameFilter}>{label}</InputLabel>
                <Select style={{backgroundColor: "#fff"}}
                        label={label}
                        labelId={nameFilter}
                        id={nameFilter}
                        value={value}
                        onChange={onChangeHandler}
                >
                    {selectorValues.map(c => <MenuItem key={c.value} value={c.value}
                                                       disabled={limitingValue === 'title' ? (c.value === 'less_then' || c.value === 'greater_then') : c.value === 'contains'}
                    >{c.name}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    );
});

export default Filter;