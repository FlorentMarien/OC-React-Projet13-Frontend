import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

const loginReducer = (state = false,action) => {
    if(action.type === "SUCCESS_LOGIN") return true;
    if(action.type === "DISCONNECT_LOGIN") return false;
    return state;
}
const profilReducer = (state = null,action) => {
    if(action.type === "ADD_PROFIL") return action.profil;
    if(action.type === "CHANGE_PROFIL") return action.profil;
    if(action.type === "CLOSE_PROFIL") return null;
    return state;
}
const tokenReducer = (state = null,action) => {
    console.log(action)
    if(action.type === "ADD_TOKEN") return action.token;
    if(action.type === "CLOSE_TOKEN") return null;
    return state
}
const reducer = combineReducers({
    connected:loginReducer,
    token:tokenReducer,
    profil:profilReducer,
});

const store = configureStore({
  reducer
});
store.getState();
export default store