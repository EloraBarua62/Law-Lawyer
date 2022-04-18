import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
// import SocialAccount from '../SocialAccount/SocialAccount';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
   
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    let errorText;

    const handleSubmit = event => {
        event.preventDefault();  
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email,password);
    }

    if(user)
    {
        navigate(from,{replace:true})
    }

    if(error)
    {
        errorText = <p className='text-danger'>{error.message}</p>
    }


    const resetPassword = async() =>{
        const email = emailRef.current.value;
        if(email)
            {
                await sendPasswordResetEmail(email);
                toast('Sent email') 
            }
        else
            toast('Enter your email pls!')
    }
   
    return (
        <div>
            <div className='container d-flex justify-content-center mt-5'>
                <form onSubmit={handleSubmit} className='border border-secondary border-5 py-5 w-50'>
                    <h1 className='text-center pb-3 fw-bold text-secondary'>Login</h1>
                    <div className='my-3 px-5'>
                        <label htmlFor="email" className='text-secondary'>Email</label>
                        <br />
                        <input type="email" ref={emailRef} id="" style={{ width: '100%' }} required />
                    </div>
                    <div className='my-3 px-5'>
                        <label htmlFor="password" className='text-secondary'>Password</label>
                        <br />
                        <input type="password" ref={passwordRef} id="" style={{ width: '100%' }} required />
                    </div>
                    
                    {
                        errorText
                    }
                    <br />
                    <div className='d-flex justify-content-center mt-3'>
                        <input type="submit" value="Login" class="btn btn-outline-secondary" />
                    </div>

                    <br />
                    <p>New in Law$Lawyer ? <Link to='/register'>Create an account</Link></p>
                    <p>Forget password ? <button onClick={resetPassword}>Reset password</button></p>
                    
                </form>

            </div>
            {/* <SocialAccount></SocialAccount> */}
            <ToastContainer />
        </div>
    );
};

export default Login;