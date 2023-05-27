import './index.scss';
import image from '../../images/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <nav className="main-nav">
            <a class="main-nav-logo" href="./index.html">
                <img
                    className="main-nav-logo-image"
                    src={image}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
                <a className="main-nav-item" href="./sign-in.html">
                    <FontAwesomeIcon icon={faCircleUser} />
                    Sign In
                </a>
            </div>
        </nav>
    )
}

export default Navbar;