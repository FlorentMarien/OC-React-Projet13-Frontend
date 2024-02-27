import './../styles/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function SignIn(){
    return(
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon className="sign-in-icon" icon="fa fa-circle-user" />
                <h1>Sign In</h1>
                <form onSubmit={(e)=>{ e.preventDefault(); window.location = "/user"} }>
                    <div className="input-wrapper">
                        <label for="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label for="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label for="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    );
  }
  
  export default SignIn;
  