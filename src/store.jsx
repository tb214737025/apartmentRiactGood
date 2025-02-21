import { createStore } from 'redux'

import { produce } from 'immer'
let img=['5889','3'];

// 1.

const initialState = { currentUser: {},}
const reducer = produce((state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            state.currentUser = action.payload
            break;
            default:
                break;
        }
    }, initialState)
    const myStore = createStore(reducer)
window.store = myStore
export default myStore;
        
