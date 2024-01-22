import React from 'react';
import './SignupScreen.css';
import { useRef } from 'react';
import { auth } from '../../firebase';

function SignupScreen(props) {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        console.log(auth); // Add this line for debugging
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => {
            alert(error.message);
        });
    };
    
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => {
            alert(error.message);
        });
    };

    return (
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder="Email address" />
                <input ref={passwordRef} type="password" placeholder="Password" />
                <button onClick={signIn} type="submit">Sign In</button>
                <h4>
                    <span className='signupScreen_gray'>
                        New to Netflix? 
                    </span>
                    {" "}
                    <span onClick={register} className='signupScreen_link'>
                        Sign Up Now
                    </span>
                </h4>
            </form>
        </div>
    );
}

export default SignupScreen;
