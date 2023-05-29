import './index.scss';

function Transaction(props) {
    //title, amount, desc, 
    const data = props.data;
    const title = data[0];
    const amount = data[1];
    const desc = data[2]

    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">{amount}</p>
                <p className="account-amount-description">{desc}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    );
}

export default Transaction;