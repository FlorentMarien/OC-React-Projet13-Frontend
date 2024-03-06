import './../styles/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Api from './../services/api';

function SignIn(){
    async function sendlogin(e){
        e.preventDefault();
        let api = new Api();
        let token = null;
        let profil = null;
        await api.sendlogin({email:document.getElementById("username").value,password:document.getElementById("password").value}).then((resp)=>{
            if(resp.status === 200){
                token = resp.body.token;
                localStorage.setItem("token", token);
            }
        });
        if(token !== null ){
            await api.getProfil(token).then((userprofil) => {
                if(userprofil.status === 200){
                    localStorage.setItem("id", userprofil.body.id);
                    localStorage.setItem("name", userprofil.body.firstName);
                }

                profil = userprofil.body;
            });
        }
        if(token !== null && profil!==null) window.location="/user";
        else console.log("Error");
    }
    return(
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon className="sign-in-icon" icon="fa fa-circle-user" />
                <h1>Sign In</h1>
                <form onSubmit={(e)=>{ sendlogin(e) } }>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    );
  }
  
  export default SignIn;
  