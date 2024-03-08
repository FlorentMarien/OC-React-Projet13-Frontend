import './../styles/main.css';
import Transaction from '../composantes/transaction';
import { useNavigate } from 'react-router-dom';
import Api from './../services/api';
import { useState,useEffect } from 'react';
import store from './../flux';
function User() {
    const [state,setState] = useState(store.getState());
    useEffect(() => {
        store.subscribe(()=>{setState(store.getState())})
    });
    const navigate = useNavigate();
    function redirect(){
        //Clear storage / state / redirect
        window.localStorage.clear(); 
        store.dispatch({type:'DISCONNECT_LOGIN'});
        store.dispatch({type:'CLOSE_TOKEN'});
        store.dispatch({type:'CLOSE_PROFIL'});
        navigate('/sign-in');
    }
    let data = {
        name:'Tony Jarvis',
        transaction: [
            {
                title: "Argent Bank Checking (x8349)",
                amount: 2082.79,
                description: "Available Balance"
            },
            {
                title: "Argent Bank Savings (x6712)",
                amount: 10928.42,
                description: "Available Balance"
            },
            {
                title: "Argent Bank Credit Card (x8349)",
                amount: 184.30,
                description: "Current Balance"
            },
        ]
    }
    let api = new Api();

    async function getProfil(token){
        await api.getProfil(token).then((userprofil) => {
            if(userprofil.status === 200){
                localStorage.setItem("id", userprofil.body.id);
                localStorage.setItem("firstName", userprofil.body.firstName);
                let test = {...userprofil.body};
                store.dispatch({type:'ADD_PROFIL',profil:test});
            }
        });
    }

    if(store.getState().token !== null ){
        getProfil(store.getState().token);
    }
    let i=0;
    return (
    (store.getState().token !== null && store.getState().profil !== null) ?
    <main className="main bg-dark">
    <div className="header">
      <h1>Welcome back<br />{store.getState().profil.firstName}!</h1>
      <button className="edit-button">Edit Name</button>
    </div>
    <h2 className="sr-only">Accounts</h2>
    {
        data.transaction.map((element)=>{
            i++;
           return <Transaction data={element} key={"transaction-"+i} />
           
        })
    }
    </main>
    :
    <main className="main bg-dark">
        <div className="header">
            <h1>Erreur lors de la connexion</h1>
        </div>
    </main>
    );
  }
  
  export default User;
  