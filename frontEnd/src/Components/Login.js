import React from 'react';
import { Button } from "@material-ui/core";
import "./Login.css";

function Login() {

    const signIn = () => {

    };

    return (
        <div className="login">
          <div className="Login__container">

            <img  
                src="https://upload.wikimedia.org/wikipedia"
                alt=""
            />
            <div className="logpin__text">
                <h1> Sign in to WhatsApp</h1>
            </div> 
            <Button 
                onClick={signIn}>
                    Sign in with Google
            </Button> 

          </div>
        </div>
    )
}

export default Login;