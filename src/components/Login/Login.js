import React, { useContext } from 'react';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../Config/firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history =  useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const handleGoogleSignIn = () => {
        var GoogleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(GoogleProvider)
            .then((result) => {
                // var credential = result.credential;
                // var token = credential.accessToken;
                const user = result.user;
                const loggedUser = {userName:user.displayName, email:user.email, userPhoto:user.photoURL}
                setLoggedInUser(loggedUser);
                history.push(from)
            }).catch((error) => {
                const errorMessage = error.message;   
                const email = error.email;
        });
}

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="loginBox p-3">
                        <h4>Login</h4>
                        <div className="inputBox">
                            <input type="email" name="email" placeholder="Enter email" />
                            <input type="password" name="password" placeholder="Enter password" />
                            <input type="submit" className="btn btn-success" value="Login" />
                        </div>
                    </div>

                    <div className="loginWithGoogle">
                        <span className="orStyle">or</span>
                        <button onClick={handleGoogleSignIn} className="btn googleLoginBtn"><FontAwesomeIcon icon={faGoogle} /> continue with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;