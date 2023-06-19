import './index.scss';
import Layout from '../layout/layout.jsx';
import Transaction from '../../components/transaction/index.jsx';
import UserHeader from '../../components/user-header/index.jsx';
import EditName from '../../components/edit-name/index.jsx';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function User() {
    const navigate = useNavigate();
    const [editName, setEditName] = useState(false);
    const data = useSelector(state => state.profile);
    const token = useSelector(state => state.token);

    useEffect(() => {
        if (!token) navigate('/', { replace: true });
    }, [token, navigate]);

    const transacData = [
        ["Argent Bank Checking (x8349)", "$2,082.79", "Available Balance"],
        ["Argent Bank Savings (x6712)", "$10,928.42", "Available Balance"],
        ["Argent Bank Credit Card (x8349)", "$184.30", "Current Balance"]
    ];

    return (
        <Layout>
            {editName === false ?
                <UserHeader updateState={setEditName} firstName={data.firstName} lastName={data.lastName} />
                :
                <EditName updateState={setEditName} data={data} />
            }
            <Transaction key="1" data={transacData[0]} />
            <Transaction key="2" data={transacData[1]} />
            <Transaction key="3" data={transacData[2]} />
        </Layout>
    );
}

export default User;