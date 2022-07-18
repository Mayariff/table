import React from 'react';
import {StyledTableCell, StyledTableRow} from "./tableStyle";
import {itemType} from "../../API/types";


const TableRow = ({id, planned_date, title, quantity, distance}: itemType) => {

    //change date format
    const date = planned_date.split('T')[0]

    return (
        <StyledTableRow key={id.toString()}>
            <StyledTableCell component="th" scope="row">
                {date}
            </StyledTableCell>
            <StyledTableCell align="right">{title}</StyledTableCell>
            <StyledTableCell align="right">{quantity}</StyledTableCell>
            <StyledTableCell align="right">{distance}</StyledTableCell>
        </StyledTableRow>
    );
};

export default TableRow;