import React from 'react'
import {Button} from '@material-ui/core';
import {useStateValue} from '../misc/stateProvider';
import {auth, googleProvider} from '../misc/firebase';
import {actionTypes} from '../reducers/userReducer';
import './Login.css';

export default function Login() {

    const [{user}, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(googleProvider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            });
        })
        .catch(err => console.log(err.message));
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/69.0.2/chrome-beta/chrome-beta_512x512.png" alt="logo google" />
                <h1>Identifiez vous pour accéder à cette application</h1>
                <Button variant="contained" color="primary" onClick={signIn}>
                    Se connecter avec google
                </Button>
            </div>
        </div>
    )
}
