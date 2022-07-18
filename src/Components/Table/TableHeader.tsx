import React from 'react';
import {TableHead, TableRow} from "@mui/material";
import {StyledTableCell} from './tableStyle';

const TableHeader = () => {

    return (
        <TableHead>
            <TableRow>
                <StyledTableCell> Дата </StyledTableCell>
                <StyledTableCell align="right"> Название </StyledTableCell>
                <StyledTableCell align="right">Количество</StyledTableCell>
                <StyledTableCell align="right">Расстояние</StyledTableCell>
            </TableRow>
        </TableHead>
    );
};

export default TableHeader;