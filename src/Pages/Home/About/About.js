import React from 'react';
import elora from '../../../images/elora.jpg'
import './About.css'

const About = () => {
    return (
        <div>
            <h1 className=' fw-bold text-center my-5'>Hey!This is developer <span className='name'> Elora Barua</span></h1>
            <div className='container w-25 h-75 px-5 profile'>
                    <img className='elora-img my-5 ms-2' src={elora} alt="" />
                    <h2 className='text-secondary fw-bold mt-2 text-center border-bottom border-3'>MY GOALS</h2>
                    <div className='text-center mt-5'>
                        <p>My goal is to be a successful software engineer.That's why i'm learning front-end development from this course.Then i'll learn back-end also.All those things are turning me to a full-stack developer</p>

                    </div>
                
            </div>
            
        </div>
    );
};

export default About;