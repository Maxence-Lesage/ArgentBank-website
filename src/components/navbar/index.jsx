import './index.scss';
import image from '../../images/argentBankLogo.png';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import store from '../../store';

function Navbar() {

    const username = store.getState().profile.profile.firstName || "Sign In";
    const link = store.getState().login.token ? "/user" : "/sign-in";
    function logout() {
        store.dispatch({ type: "user/logout" });
    }

    return (
        <nav className="main-nav">
            <Link to={"/"}>
                <div className="main-nav-logo">
                    <img
                        className="main-nav-logo-image"
                        src={image}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </div>
            </Link>
            <div className='links'>
                <Link to={link}>
                    <div className="main-nav-item">
                        <FontAwesomeIcon className='userIcon' icon={faCircleUser} />
                        <span>{username}</span>
                    </div>
                </Link>
                <Link to={"/"} onClick={logout}>
                    <div className="main-nav-item">
                        <FontAwesomeIcon className='userIcon' icon={faRightFromBracket} />
                        Sign Out
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;