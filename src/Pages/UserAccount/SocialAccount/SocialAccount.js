// import React from 'react';
// import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
// import { useNavigate } from 'react-router-dom';
// import auth from '../../../firebase.init';
// import google from '../../../images/google-icon2-removebg-preview.png'

// const SocialAccount = () => {
//     const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
//     const navigate = useNavigate();

//     if (user)
//         navigate('/')
//     return (
//         <div className='w-50 mx-auto my-5'>
//             <div className='d-flex justify-content-center align-items-center px-5'>
//                 <div className='bg-secondary w-50' style={{ height: '1px' }}></div>
//                 <p className='p-2'>or</p>
//                 <div className='bg-secondary w-50' style={{ height: '1px' }}></div>
//             </div>

//             <div className='d-flex justify-content-center align-items-center'>
//                 <button onClick={signInWithGoogle()} style={{ width: '15rem' }} className='border border-5 btn btn-outline-secondary rounded-pill p-2'>
//                     <img className='pe-2' style={{ width: '40px' }} src={google} alt="" />
//                     Google Sign in</button>
//             </div>


//         </div>
//     );
// };

// export default SocialAccount;