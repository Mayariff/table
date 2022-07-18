import {columnType, ParamsType, sortType} from "../../API/types";
import {paramsReducer, setParams} from "./ParamsReducer";

type ParamsInitialStateType = {
    params: ParamsType
}

let startState: ParamsInitialStateType;

beforeEach(() => {
    startState = {
        params: {
            page: 1,
            size: 2,
            column: 'title' as columnType,
            sort: '' as sortType,
            searchingValue: '' as string | number,
        }
    }
})

test('correct params should be set', () => {
    const payload = {
        page: 2,
        size: 2,
        column: 'title' as columnType,
        sort: '' as sortType,
        searchingValue: 'test' as string | number,
    }

    const endState = paramsReducer(startState, setParams(payload))
    expect(endState.params.page).toBe(2);
    expect(endState.params.searchingValue).toBe('test');
})


