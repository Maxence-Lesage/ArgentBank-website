import './index.scss';
import image from '../../images/argentBankLogo.png';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logoutReducer } from '../../store';

function Navbar() {

    const dispatch = useDispatch();
    const username = useSelector(state => state.profile.userName) || "Sign In";
    const link = useSelector(state => state.token) ? "/profile" : "/sign-in";
    function logout() {
        dispatch(logoutReducer());
    }
    const logoutLink = useSelector(state => state.token) && <Link to={"/"} onClick={logout}>
        <div className="main-nav-item">
            <FontAwesomeIcon className='userIcon' icon={faRightFromBracket} />
            Sign Out
        </div>
    </Link>;

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
                {logoutLink}
            </div>
        </nav>
    )
}

export default Navbar;