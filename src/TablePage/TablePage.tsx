import React, {MouseEventHandler, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../Utils/redux-utils";
import {selectParams} from "../Components/Header/selectors";
import {selectStatus} from "../APP/selectors";
import {addNewBatchItems, fetchItems} from "./TableReducer";
import {setParams} from "../Components/Header/ParamsReducer";
import {Button, CircularProgress, Paper, Table, TableBody, TableContainer} from "@mui/material";
import {selectItems} from "./selectors";
import TableHeader from "../Components/Table/TableHeader";
import TableRow from "../Components/Table/TableRow";
import s from './TablePage.module.scss'


const TablePage = () => {
    const dispatch = useAppDispatch()
    const items = useAppSelector(selectItems)
    const params = useAppSelector(selectParams)
    const status = useAppSelector(selectStatus)

    // handler for button 'load more'
    const loadMore: MouseEventHandler<HTMLButtonElement> = async () => {
        const newParams = {...params, page: params.page + 1}
        await dispatch(setParams(newParams))
        dispatch(addNewBatchItems(newParams))
    }

    useEffect(() => {
        dispatch(fetchItems(params))
    }, [])

    return (
        <div className={s.container}>
            <Paper className={s.paper}>
                <TableContainer className={s.tableContainer}>
                    <Table className={s.table} stickyHeader aria-label="sticky table">
                        <TableHeader/>
                        <TableBody>
                            {items.map((r) => <TableRow id={r.id}
                                                        key={r.id}
                                                        planned_date={r.planned_date}
                                                        title={r.title}
                                                        quantity={r.quantity}
                                                        distance={r.distance}/>)}
                        </TableBody>
                    </Table>
                </TableContainer>
                {items.length === 0 && status !== 'loading' && <div> Mы ничего не нашли по вашему запросу </div>}
                <div className={s.btn}>
                    {status === 'loading' ? <CircularProgress/> :
                        <Button disabled={status === 'loading' || params.size * params.page > items?.length}
                                onClick={loadMore}> Load More</Button>
                    }</div>
            </Paper>
        </div>
    );
};

export default TablePage;