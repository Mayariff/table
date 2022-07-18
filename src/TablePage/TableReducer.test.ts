import {itemType, ParamsType} from "../API/types";
import {addNewBatchItems, fetchItems, slice} from "./TableReducer";

type startStateType = {
    items: itemType[]
}

let startState: startStateType

const tableReducer = slice.reducer
beforeEach(() => {
    startState = {
        items: [
            {
                id: 3,
                planned_date: "2022-12-11T19:00:00.000Z",
                title: "Lastochka",
                quantity: "15",
                distance: "3"
            }
        ]
    }
})

test('Data should be added', () => {

    const params = {} as ParamsType

    let payload = {items: startState.items}
    const action = fetchItems.fulfilled(payload, 'params', params)

    const endState = tableReducer({} as startStateType, action)

    expect(endState.items.length).toBe(1)
    expect(endState.items[0].title).toBe("Lastochka")
})

test('new Data  should be added', () => {

    const params = {} as ParamsType

    let payload = {
        items: [
            {
                id: 1,
                planned_date: "2022-12-11T19:00:00.000Z",
                title: "Sapsan",
                quantity: "15",
                distance: "3"
            }
        ]
    }
    let newInitialState: startStateType = {
        items: [
            {
                id: 3,
                planned_date: "2022-12-11T19:00:00.000Z",
                title: "Lastochka",
                quantity: "15",
                distance: "3"
            }
        ]
    }

    const action = addNewBatchItems.fulfilled(payload, 'params', params)
    const endState = tableReducer(newInitialState, action)
    expect(endState.items.length).toBe(2)
    expect(endState.items[1].title).toBe("Sapsan")
})