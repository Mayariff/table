import React, {ChangeEventHandler, useCallback, useEffect, useState} from 'react';
import s from './Header.module.scss'
import Filter from "../Filter/Filter";
import bookImg from '../../common/img/1618496604_24-phonoteka_org-p-fon-knigi-dlya-fotoshopa-28.jpg'
import {useAppDispatch, useAppSelector} from "../../Utils/redux-utils";
import {selectParams} from "./selectors";
import SearchInput from "../SearchInput/SearchInput";
import {columnType, sortType} from "../../API/types";
import {fetchItems} from "../../TablePage/TableReducer";
import {setParams} from "./ParamsReducer";
import {SelectDataType} from "../Filter/type";


const Header = () => {

    const Params = useAppSelector(selectParams)
    const dispatch = useAppDispatch()


    //for searching input  -param searchingValue
    const [searchingValue, setSearchingValue] = useState<string | number>(Params.searchingValue)
    const searchValue: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
        setSearchingValue(e.currentTarget.value)
    }, [setSearchingValue])

    // for searching button
    const searchItems = useCallback(async () => {
        dispatch(fetchItems(Params))
    }, [dispatch, Params])
    const onKeyPress: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if (e.key === "Enter") {
            dispatch(fetchItems(Params))
        }
    }, [dispatch, Params])


    //select column -param column
    const columns: Array<SelectDataType> = [{
        name: 'Название',
        value: 'title'
    },
        {
            name: 'Количество',
            value: 'quantity'
        },
        {
            name: 'Расстояние',
            value: 'distance'
        }
    ]
    const [selectedColumn, setSelectedColumn] = useState<columnType>('' as columnType)
    const selectColumn = useCallback((value: string) => {
        setSelectedColumn(value as columnType)
    }, [setSelectedColumn])


    //select condition  - param sort
    const sortingBy: Array<SelectDataType> = [{
        name: 'Меньше',
        value: 'less_then',
    },
        {
            name: 'Больше',
            value: 'greater_then',
        },
        {
            name: 'Равно',
            value: 'equal'
        },
        {
            name: 'Содержит',
            value: 'contains'
        },
    ]
    const [selectedSorting, setSelectedSorting] = useState<sortType>('' as sortType)
    const selectSorting = useCallback((value: string) => setSelectedSorting(value as sortType), [setSelectedSorting])

    // for disable button
    const disableBTNCondition = selectedColumn === 'title' ? (selectedSorting === 'less_then' || selectedSorting === 'greater_then') : selectedSorting === 'contains'


    useEffect(() => {
        dispatch(setParams(
            {
                page: Params.page,
                size: Params.size,
                column: selectedColumn,
                sort: selectedSorting,
                searchingValue: typeof searchingValue === 'string' ? searchingValue.trim().toLowerCase() : searchingValue
            }))
    }, [searchingValue, selectedSorting, selectedColumn])

    //background in css
    const image = {backgroundImage: `url(${bookImg})`}

    return (
        <header className={s.header} style={image}>
            <div className={s.container}>
                <h1>Введите параметры поиска</h1>
                <div className={s.block1}>
                    <SearchInput value={searchingValue}
                                 onChange={searchValue}
                                 placeholder={"Введите значение поиска"}
                                 onClick={searchItems}
                                 onKeyPress={onKeyPress}
                                 disableBTNCondition={disableBTNCondition}
                    />
                </div>
                <div className={s.block2}>
                    <Filter nameFilter={'culumns'}
                            selectorValues={columns}
                            selectValue={selectColumn}
                            value={selectedColumn}
                            label={'Колонка для фильтра'}
                    />
                    <Filter nameFilter={'sorting by'}
                            selectorValues={sortingBy}
                            selectValue={selectSorting}
                            value={selectedSorting}
                            label={'Способ фильтрации'}
                            limitingValue={selectedColumn}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;