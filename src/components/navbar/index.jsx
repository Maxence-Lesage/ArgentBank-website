import './index.scss';
import image from '../../images/argentBankLogo.png';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    //On stock username dans un state redux, par défaut il vaut Sign In
    //et on remplace par la suite par le prénom de la personne connecté
    const username = "Sign In";
    //IF l'utilisateur est connecté, on affiche Sign Out

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
            <div>
                <Link to={"/sign-in"}>
                    <div className="main-nav-item">
                        <FontAwesomeIcon icon={faCircleUser} />
                        <span>{username}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;