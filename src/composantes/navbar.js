import './../styles/main.css';
import argentbanklogo from './../img/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
function Navbar(){
    return(
        <nav className="main-nav">
            <a className="main-nav-logo" onClick={(e) => {window.location = "/"}}>
            <img
                className="main-nav-logo-image"
                src={argentbanklogo}
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
                <a className="main-nav-item" onClick={(e) => {window.location = "/sign-in"}}>
                <FontAwesomeIcon className="fa fa-circle-user sign-in-icon" icon="fa fa-circle-user" />
                Sign In
                </a>
            </div>
        </nav>
    );
}
export default Navbar