import React from 'react';
import {IconButton, Paper} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import {SearchInputType} from "./type";
import {useAppSelector} from "../../Utils/redux-utils";
import {selectStatus} from "../../APP/selectors";
import SearchIcon from "@mui/icons-material/Search";


const SearchInput = React.memo(({
                                    value,
                                    onChange,
                                    placeholder,
                                    onClick,
                                    onKeyPress,
                                    disableBTNCondition
                                }: SearchInputType) => {

    const status = useAppSelector(selectStatus)

    return (
        <Paper
            component="form"
            sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 250}}>
            <InputBase
                sx={{ml: 1, flex: 1}}
                placeholder={placeholder}
                inputProps={{'aria-label': 'Search'}}
                value={value}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <IconButton sx={{p: '10px'}}
                        aria-label="search"
                        onClick={onClick}
                        disabled={status === 'loading' || disableBTNCondition}>
                <SearchIcon/>
            </IconButton>
        </Paper>
    );
});

export default SearchInput;