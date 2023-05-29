import './index.scss';
import Layout from '../layout/layout.jsx';
import Transaction from '../../components/transaction/index.jsx';
import store from '../../store/index.js';
import { useState } from 'react';
import { loadProfile } from '../../fetch/fetch.js';

function User() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const transacData = [
        ["Argent Bank Checking (x8349)", "$2,082.79", "Available Balance"],
        ["Argent Bank Savings (x6712)", "$10,928.42", "Available Balance"],
        ["Argent Bank Credit Card (x8349)", "$184.30", "Current Balance"]
    ];

    (async function () {
        const response = await loadProfile();
        if (response) {
            const data = store.getState().profile.profile;
            setFirstname(data.firstName);
            setLastname(data.lastName);
        }
    })();

    return (
        <Layout>
            <div className="header">
                <h1>Welcome back<br />{firstname + " " + lastname}!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Transaction key="1" data={transacData[0]} />
            <Transaction key="2" data={transacData[1]} />
            <Transaction key="3" data={transacData[2]} />
        </Layout>
    );
}

export default User;