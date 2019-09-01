import { createStore } from 'redux'

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    img: '',
    mortgage: '',
    rent: ''
}

export const UPDATE_STEP_ONE = 'UPDATE_STEP_ONE'
export const UPDATE_STEP_TWO = 'UPDATE_STEP_TWO'
export const UPDATE_STEP_THREE = 'UPDATE_STEP_THREE'
export const CANCEL = 'CANCEL'

const reducer = (state = initialState, action) => {
    
    const { payload, type } = action

    switch (type) {

        case UPDATE_STEP_ONE:
            return Object.assign({}, state, payload)
        case UPDATE_STEP_TWO:
            return Object.assign({}, state, payload)
        case UPDATE_STEP_THREE:
            return Object.assign({}, state, payload)
        case CANCEL:
            const newState = {
                name: '',
                address: '',
                city: '',
                state: '',
                zip: '',
                img: '',
                mortgage: '',
                rent: ''
            }
            return {...newState}
        default:
            return state
    }
}

export default createStore(reducer)