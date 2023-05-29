import { configureStore } from '@reduxjs/toolkit'

const initialState = {
    token: "",
    profile: {},
}

let store = configureStore({
    reducer: {
        login: loginReducer,
        profile: profileReducer,
        logout: logoutReducer
    }
}, initialState);

export default store;

function loginReducer(state = initialState, action) {
    if (action.type === 'signin/login') {
        const { token } = action.payload;
        return { ...state, token }
    } else {
        return state
    }
}

function profileReducer(state = initialState, action) {
    if (action.type === 'user/profile') {
        const { profile } = action.payload;
        return { ...state, profile }
    } else {
        return state
    }
}

function logoutReducer(state = initialState, action) {
    if (action.type === 'user/logout') {
        return { ...state, token: "", profile: {} }
    } else {
        return state
    }
}

//store.subscribe(() => console.log(store.getState()));