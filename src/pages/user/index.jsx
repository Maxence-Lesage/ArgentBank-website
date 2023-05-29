import './index.scss';
import Layout from '../layout/layout.jsx';
import Transaction from '../../components/transaction/index.jsx';

function User() {
    const transacData = [
        ["Argent Bank Checking (x8349)", "$2,082.79", "Available Balance"],
        ["Argent Bank Savings (x6712)", "$10,928.42", "Available Balance"],
        ["Argent Bank Credit Card (x8349)", "$184.30", "Current Balance"]
    ];

    return (
        <Layout>
            <div class="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button class="edit-button">Edit Name</button>
            </div>
            <h2 class="sr-only">Accounts</h2>
            <Transaction key="1" data={transacData[0]} />
            <Transaction key="2" data={transacData[1]} />
            <Transaction key="3" data={transacData[2]} />
        </Layout>
    );
}

export default User;