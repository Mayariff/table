import axios from "axios";
import {itemType, ParamsType} from "./types";

const instance = axios.create({
    baseURL: 'http://localhost:8081/api/item',
})

//API
export const tableAPI = {
    getTableData(params: ParamsType) {
        const {page, size, column, sort, searchingValue} = params
        return instance.get<itemType[]>(`?column=${column}&sort=${sort}&searchingValue=${searchingValue}&page=${page}&size=${size}`)
    }
}
