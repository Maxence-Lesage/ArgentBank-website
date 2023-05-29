import './index.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../fetch/fetch.js';

function SignInForm() {

    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function sendForm(event) {
        event.preventDefault();
        const response = await login(email, password);
        if (response) {
            navigate('/user', { replace: true });
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