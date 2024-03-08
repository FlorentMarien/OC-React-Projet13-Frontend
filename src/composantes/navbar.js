import './../styles/main.css';
import argentbanklogo from './../img/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import store from './../flux';
import { useState,useEffect } from 'react';

library.add(fas);

function Navbar(){
    const [state,setState] = useState(store.getState());
    useEffect(() => {
        store.subscribe(()=>{setState(store.getState())})
    });
    let token=null;
    //console.log(store.getState())
    if(window.localStorage.getItem('token') !== null && window.localStorage.getItem('id') !== null && window.localStorage.getItem('firstName') !== null){
        if(store.getState().token === null){
            store.dispatch({type:'SUCCESS_LOGIN'});
            store.dispatch({type:'ADD_TOKEN',token:window.localStorage.getItem('token')});
            store.dispatch({type:'ADD_PROFIL',profil:{id:window.localStorage.getItem('id'),firstName:window.localStorage.getItem('firstName')}});
        }
    }
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
                store.getState().token === null ?   
                <a className="main-nav-item" onClick={(e) => {navigate('/sign-in')}}>
                <FontAwesomeIcon className="sign-in-icon" icon="fa fa-circle-user" />
                Sign In
                </a>
                :
                <>
                <a className="main-nav-item" onClick={(e) => {navigate('/user')}}>
                    <FontAwesomeIcon className="sign-in-icon" icon="fa fa-circle-user" />
                    {store.getState().profil !== null && store.getState().profil.firstName}
                </a>
                <a className="main-nav-item" onClick={(e) => {
                    window.localStorage.clear(); 
                    store.dispatch({type:'DISCONNECT_LOGIN'});
                    store.dispatch({type:'CLOSE_TOKEN'});
                    store.dispatch({type:'CLOSE_PROFIL'});
                    navigate('/sign-in');
                    }}>
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