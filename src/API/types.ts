export type ParamsType ={
    page:number,
    size: number,
    column: columnType,
    sort: sortType,
    searchingValue: string| number
}
export type columnType = 'planned_date'| 'title'| 'quantity' |'distance'
export type sortType = 'less_then'| 'greater_then'| 'equal'| 'contains'

export type itemType ={
    id: number,
    planned_date: string,
    title: string,
    quantity: string,
    distance: string
}