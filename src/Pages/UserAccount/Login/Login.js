import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialAccount from '../SocialAccount/SocialAccount';


const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email,password);
        navigate('/');
    }
   
    return (
        <div>
            <div className='container d-flex justify-content-center mt-5'>
                <form onSubmit={handleSubmit} className='border border-secondary border-5 py-5 w-50'>
                    <h1 className='text-center pb-3 fw-bold text-secondary'>Login</h1>
                    <div className='my-3 px-5'>
                        <label htmlFor="email" className='text-secondary'>Email</label>
                        <br />
                        <input type="email" name="email" id="" style={{ width: '100%' }} required />
                    </div>
                    <div className='my-3 px-5'>
                        <label htmlFor="password" className='text-secondary'>Password</label>
                        <br />
                        <input type="password" name="password" id="" style={{ width: '100%' }} required />
                    </div>
                    <p>New in Law$Lawyer ? <Link to='/register'>Create an account</Link></p>
                    <br />
                    <div className='d-flex justify-content-center mt-3'>
                        <input type="submit" value="Login" class="btn btn-outline-secondary" />
                    </div>
                    
                </form>

            </div>
            <SocialAccount></SocialAccount>
        </div>
    );
};

export default Login;