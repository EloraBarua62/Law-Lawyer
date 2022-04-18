import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container mx-5 my-5'>
            <h3>Difference between authorization and authentication:</h3>

            <div className='d-flex mb-5'>
                <div className='frame p-2'>
                    <h4>Authentication</h4>
                    <br />
                    <p>The identity of users is validated during the authentication process before they are granted access to the system.Users or individuals are validated during the authentication procedure.</p>
                </div>
                <div className='frame p-2'>
                    <h4>Authorization</h4>
                    <br />
                    <p>
                        The authority of a person or a user is examined during the authorization process in order to gain access to resources.Users or individuals are validated in this procedure.
                    </p>
                </div>
                
                
            </div>


            <h2 className='mt-5'>Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p className='mb-5'>Firebase Authentication helps building safe authentication systems as well as end-user sign-in simple. It's a complete identity management solution that incorporates email and password authentication, as well as logins to Google, Twitter, Facebook, and GitHub. In addition, there is a library for firebase hooks that makes me feel confident in building an authentication solution. This is why I've chosen to use Firebase.
                The most common alternatives to Firebase authentication are Auth0, MongoDB, Passport, and Okta.</p>


            <h2 className='mt-5'>What other services does firebase provide other than authentication??</h2>
            <p>Firebase provides a lot of services.All of them,popular services from firebase are given bellow-
                <br />
                1.Hosting
                <br />
                2.Google Analytics
               
                <br />
                3.Predictions
                <br />
                4.Information
                <br />
                5.Cloud Storage
                <br />
                
                6.Cloud Messaging
                <br />
                7.Cloud Functions
                <br />
                </p>
            
        </div>
    );
};

export default Blog;