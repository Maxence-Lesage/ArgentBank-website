import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
    token: "",
    profile: {},
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginReducer: (state, action) => {
            state.token = action.payload.token;
        },
        profileReducer: (state, action) => {
            state.profile = action.payload.profile;
        },
        logoutReducer: (state) => {
            state.token = "";
            state.profile = {};
        }
    },
});

export const { loginReducer, profileReducer, logoutReducer } = userSlice.actions;

const store = configureStore({
    reducer: userSlice.reducer,
});

export default store;

//store.subscribe(() => console.log(store.getState()));