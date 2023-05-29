import { configureStore } from '@reduxjs/toolkit'

const initialState = {
    token: ""
}

let store = configureStore({
    reducer: {
        login: loginReducer,
    }
}, initialState);

export default store;

function loginReducer(state = initialState, action) {
    switch (action.type) {
        case 'signin/login':
            const { token } = action.payload;
            console.log(token);
            return { ...state, token }
        default:
            return state
    }
}

store.subscribe(() => console.log(store.getState()));