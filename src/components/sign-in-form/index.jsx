import './index.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import store from '../../store/index.js';

function SignInForm() {

    const [tusername, setUsername] = useState('');
    const [tpassword, setPassword] = useState('');
    const dispatch = useDispatch();

    async function login(event) {
        event.preventDefault();
        const obj = { "email": tusername, "password": tpassword }
        console.log(tusername, tpassword);
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
            dispatch({ type: 'signin/login', payload: { token } });
        } else {
            console.log("BAD Credentials");
        }

        setTimeout(() => {
            console.log(store.getState().login.token);
        }, 3000);
    }

    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username"
                        value={tusername} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"
                        value={tpassword} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                </div>
                <button className="sign-in-button" onClick={(e) => login(e)}>Sign In</button>
            </form>
        </section>
    );
}

export default SignInForm;