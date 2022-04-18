import React, { useState } from 'react';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
// import SocialAccount from '../SocialAccount/SocialAccount';


const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,{ sendEmailVerification: true });

    const [passwordError,setPasswordError] = useState('')
    const navigate = useNavigate();

    const handleSubmit = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirm_password = event.target.confirm_password.value;
        if(password===confirm_password)
            {
                createUserWithEmailAndPassword(email,password);
                navigate('/');
            }
        else
          setPasswordError("Password didn't match");

    }

    

    return (
        <div>
            <div className='container d-flex justify-content-center mt-5'>
                <form onSubmit={handleSubmit} className='border border-secondary border-5 py-5 w-50'>
                    <h1 className='text-center pb-3 fw-bold text-secondary'>Sign up</h1>
                    <div className='my-3 px-5'>
                        <label htmlFor="name" className='text-secondary'>Name</label>
                        <br />
                        <input type="text" name="name" id="" style={{ width: '100%' }} required />
                    </div>
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
                    <div className='my-3 px-5'>
                        <label htmlFor="confirm-password" className='text-secondary'>Confirm Password</label>
                        <br />
                        <input type="password" name="confirm_password" id="" style={{ width: '100%' }} required />
                    </div>
                    <div className='d-flex justify-content-center mt-3'>
                        <input type="submit" value="Register" class="btn btn-outline-secondary" />
                    </div>
                    <p>{passwordError ? passwordError : ''}</p>
                </form>

            </div>
            {/* <SocialAccount></SocialAccount> */}
        </div>
        
    );
};

export default Register;