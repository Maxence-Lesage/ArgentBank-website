import './index.scss'

function UserHeader(props) {
    const firstname = props.firstName;
    const lastname = props.lastName;

    function handleClick() {
        props.updateState(true);
    }

    return (
        <>
            <div className="header">
                <h1>Welcome back<br />{firstname + " " + lastname}!</h1>
                <button className="edit-button" onClick={handleClick}>Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
        </>
    )

}

export default UserHeader;