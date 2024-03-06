import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { combineReducers } from 'redux'

const initialState = {
    connected:false,
    profil: undefined
}
const loginReducer = (state,action) => {
    console.log("login_reducer")
    if(action === "SUCESS_LOGIN") return true;
    else return false;
}
const profilReducer = (state,action,data) => {
    if(action === "ADD_PROFIL") return data;
    
}
const reducer = (state, action, data) => {
    console.log(action)
    return {
        connected:loginReducer(state,action),
        profil:profilReducer(state,action,data)
    };
};

const store = configureStore({
  reducer,initialState
})
console.log(store.getState())
export default store