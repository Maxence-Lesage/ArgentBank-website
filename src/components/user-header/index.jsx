import './index.scss'

function UserHeader({ updateState, firstName, lastName }) {

    function handleClick() {
        updateState(true);
    }

    return (
        <>
            <div className="header">
                <h1>Welcome back<br />{firstName + " " + lastName}!</h1>
                <button className="edit-button" onClick={handleClick}>Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
        </>
    )

}

export default UserHeader;