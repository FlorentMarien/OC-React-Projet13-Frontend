import './../styles/main.css';
import argentbanklogo from './../img/argentBankLogo.png';

function Navbar(){
    return(
        <nav class="main-nav">
            <a class="main-nav-logo" onClick={(e) => {window.location = "/"}}>
            <img
                class="main-nav-logo-image"
                src={argentbanklogo}
                alt="Argent Bank Logo"
            />
            <h1 class="sr-only">Argent Bank</h1>
            </a>
            <div>
                <a class="main-nav-item" onClick={(e) => {window.location = "/sign-in"}}>
                <i class="fa fa-user-circle"></i>
                Sign In
                </a>
            </div>
        </nav>
    );
}
export default Navbar