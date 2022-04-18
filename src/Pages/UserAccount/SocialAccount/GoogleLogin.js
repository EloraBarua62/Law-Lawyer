import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const GoogleLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div>
            <button onClick={()=>signInWithGoogle()}>Google Sign in</button>
        </div>
    );
};

export default GoogleLogin;