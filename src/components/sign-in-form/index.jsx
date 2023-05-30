import './index.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginFetch, profileFetch } from '../../fetch/fetch.js';
import store from '../../store';
import { logoutReducer } from '../../store';

function SignInForm() {

    //Good
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Good
    async function sendForm(event) {
        event.preventDefault();
        const isLogged = await loginFetch(email, password);
        if (isLogged) {
            const hasProfile = await profileFetch();
            if (hasProfile) {
                navigate('/profile', { replace: true });
            } else {
                store.dispatch(logoutReducer());
            }
        }
    }

    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username"
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                </div>
                <button className="sign-in-button" onClick={(e) => sendForm(e)}>Sign In</button>
            </form>
        </section>
    );
}

export default SignInForm;