import React from 'react';

const Login = () => {
    return (
        <div>
            <h3>Please Log In</h3>
        <div style={{margin:'20px'}}>
            <button>Sign in With google</button>

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