import store from '../store/index.js';
import { loginReducer, profileReducer } from '../store/index.js';

export async function loginFetch(email, password) {
    const obj = { "email": email, "password": password }
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (response.ok) {
        const data = await response.json();
        const token = data.body.token;
        store.dispatch(loginReducer({ token }));
        return true;
    } else {
        console.log("BAD Credentials");
        return false;
    }
}

export async function profileFetch() {
    const token = store.getState().token;
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    if (response.ok) {
        const data = await response.json();
        const profile = data.body;
        store.dispatch(profileReducer({ profile }));
        return true;
    } else {
        return false;
    }
}