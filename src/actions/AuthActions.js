import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {LOGIN_USER_SUCCESS,LOGIN_USER_FAIL,LOGIN_USER,EMAIL_CHANGED,PASSWORD_CHANGED} from './types';
export const loginUser=({email,password})=>
{
    return (dispatch) =>
    {
        dispatch({type:LOGIN_USER});
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(user => loginUserSuccess(dispatch,user))
            .catch(()=>loginUserFail(dispatch));
    };
};
export const emailChanged = (text) =>{
    return {
        type:EMAIL_CHANGED,
        payload: text
    };
};
export const passwordChanged=(text)=>{
    return {
        type:PASSWORD_CHANGED,
        payload:text
    };
};
const loginUserFail = (dispatch)=>
{
    dispatch({type:LOGIN_USER_FAIL});
};
const loginUserSuccess = (dispatch,user)=>
{
    dispatch({
        type:LOGIN_USER_SUCCESS,
        payload:user
    });
    Actions.main();
};