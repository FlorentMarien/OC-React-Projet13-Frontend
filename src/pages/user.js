import './../styles/main.css';
import './../styles/user.css';
import Transaction from '../composantes/transaction';
import Api from './../services/api';
import { useState,useEffect } from 'react';
import store from './../flux';
import Errorpage from './errorpage';
function User() {
    const [state,setState] = useState(store.getState());
    const [stateeditname,setstateeditname] = useState(0);
    
    useEffect(() => {
        store.subscribe(()=>{setState(store.getState())})
    });
    
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
                localStorage.setItem("lastName", userprofil.body.lastName);
                let test = {...userprofil.body};
                store.dispatch({type:'ADD_PROFIL',profil:test});
                
            }
        });
    }
    async function editname(e){
        console.log('editname');
        
        let firstName = document.getElementById('input-firstname').value;
        let lastName = document.getElementById('input-lastname').value;
        if(firstName !== undefined && firstName !== "" && lastName !== undefined && lastName !== ""){
            let profil = {
                firstName:firstName,
                lastName:lastName
            }
            
            await api.changeProfil(store.getState().token,profil).then((answer)=>{
                localStorage.setItem("firstName", profil.firstName);
                localStorage.setItem("lastName", profil.lastName);
                store.dispatch({type:'CHANGE_PROFIL',profil:profil});
            })
            
        }
    }
    if(store.getState().token !== null && store.getState().profil === null){
        getProfil(store.getState().token);
    }
    let i=0;
    return (
    (store.getState().token !== null && store.getState().profil !== null) ?
    <main className="main bg-dark">
    <div className="header">
      <h1>Welcome back<br />{store.getState().profil.firstName}!</h1>
      {
        stateeditname === 0 ?
        <button className="edit-button" onClick={(e)=>{setstateeditname(1)}}>Edit Name</button>
        :
        <>
        <div>
            <input id="input-firstname" className="input-text" type='text' placeholder={store.getState().profil.firstName}/>
            <input id="input-lastname" className="input-text" type='text' placeholder={store.getState().profil.lastName}/>
        </div>
        <div>
            <button className='input-button' onClick={(e)=>{editname(e)}}>Edit</button>
            <button className='input-button' onClick={(e)=>{setstateeditname(0)}}>Close</button>
        </div>
        </>
      }
      

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
    <Errorpage />
    );
  }
  
  export default User;
  