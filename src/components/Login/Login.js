import React from 'react';
import useFirebase from '../../Hooks/useFirebase';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import { getAuth } from 'firebase/auth';

const auth=getAuth(app);


const Login = () => {
    // const {signInWithGoogle}=useFirebase();
    const [signInWithGoogle,user]=signInWithGoogle(auth)
    return (
        <div>
            <h3>Please Log In</h3>
        <div style={{margin:'20px'}}>
            <button onClick={()=>signInWithGoogle()} >Sign in With google</button>

            </div>
            <form action="">
                <input type="text" name="" placeholder='Your Name' id="" /> <br />
                <input type="email" name="" placeholder='Your Email' id="" /> <br />
                <input type="password" name="" placeholder='Password' id="" /> <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;