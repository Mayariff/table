import {ChangeEventHandler, KeyboardEventHandler} from "react";

export type SearchInputType = {
    value: string | number
    onChange: ChangeEventHandler<HTMLInputElement>
    placeholder?: string
    onKeyPress: KeyboardEventHandler<HTMLDivElement>
    onClick: () => void
    disableBTNCondition?: boolean
}