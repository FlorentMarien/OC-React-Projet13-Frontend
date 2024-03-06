import './../styles/main.css';
import argentbanklogo from './../img/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
library.add(fas);

function Navbar(){
    const navigate = useNavigate();
    return(
        <>
        <nav className="main-nav">
            <a className="main-nav-logo" onClick={(e) => {navigate('/')}}>
            <img
                className="main-nav-logo-image"
                src={argentbanklogo}
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
                {
                window.localStorage.getItem('token') === null ?   
                <a className="main-nav-item" onClick={(e) => {navigate('/sign-in')}}>
                <FontAwesomeIcon className="sign-in-icon" icon="fa fa-circle-user" />
                Sign In
                </a>
                :
                <>
                <a className="main-nav-item" onClick={(e) => {navigate('/user')}}>
                    <FontAwesomeIcon className="sign-in-icon" icon="fa fa-circle-user" />
                    {window.localStorage.getItem("name")}
                </a>
                <a className="main-nav-item" onClick={(e) => { window.localStorage.clear(); navigate('/sign-in')}}>
                    <FontAwesomeIcon className="sign-in-icon" icon="fa fa-sign-out" />
                    Sign Out
                </a>
                </>
                }
            </div>
        </nav>
      </>
    );
}
export default Navbar