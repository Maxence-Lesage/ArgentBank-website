import './index.scss'
import { updateUserNameFetch } from '../../fetch/fetch.js';

function EditName(props) {

    const userName = props.data.userName;
    const firstName = props.data.firstName;
    const lastName = props.data.lastName;

    function cancelClick(event) {
        event.preventDefault();
        props.updateState(false);
    }

    function saveClick(event) {
        event.preventDefault();
        const userNameValue = document.getElementById('editNameForm_userName').value;
        updateUserNameFetch(userNameValue);
        props.updateState(false);
    }

    return (
        <div className="header">
            <h1>Edit user info</h1>
            <form action="#" className='editNameForm'>
                <div className="inputContainers">
                    <div className="formElement">
                        <label htmlFor="editNameForm_userName">User Name:</label>
                        <input type="text" name="" id="editNameForm_userName" defaultValue={userName} />
                    </div>
                    <div className="formElement">
                        <label htmlFor="editNameForm_firstName">First Name:</label>
                        <input className='readOnly' readOnly type="text" name="" id="editNameForm_firstName" defaultValue={firstName} />
                    </div>
                    <div className="formElement">
                        <label htmlFor="editNameForm_lastName">Last Name:</label>
                        <input className='readOnly' readOnly type="text" name="" id="editNameForm_lastName" defaultValue={lastName} />
                    </div>
                </div>
                <div className="formButtons">
                    <button className="edit-button form-button" onClick={(e) => saveClick(e)}>Save</button>
                    <button className="edit-button form-button" onClick={(e) => cancelClick(e)}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EditName;