import React from 'react';
import elora from '../../../images/elora.jpg'
import './About.css'

const About = () => {
    return (
        <div className='container'>
            <h1 className=' fw-bold text-center my-5'>Hey!This is developer <span className='name'> Elora Barua</span></h1>
            <div className='container profile'>
                    <img className='elora-img mx-5 my-5' src={elora} alt="" />
                    <h2 className='text-secondary fw-bold mt-5 text-center border-bottom border-3'>MY GOALS</h2>
                    <div className='text-center mt-5'>
                        <h5> Full-stack developer. </h5>
                        <h5> Successful female Software Engineer.</h5>
                        <h5> Become a person of great personality.</h5>

                    </div>
                
            </div>
            
        </div>
    );
};

export default About;