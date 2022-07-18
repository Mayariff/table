export type propsType = {
    nameFilter: string,
    selectorValues: Array<SelectDataType>
    selectValue: (value: string) => void
    value: string
    label: string
    limitingValue?: string
}


export type SelectDataType = {
    name: string,
    value: string
}