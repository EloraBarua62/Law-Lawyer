import React from 'react';
import Slider2 from '../../../images/Slider2.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='mb-5' style={{position:'relative'}}>
            <img className='img-fluid' src={Slider2} alt="" />
            <div className='w-25 h-100 text-banner pt-5 ps-1' style={{
                position: 'absolute', top: '0',left:'20px'
            }}>
                <h1 className='fw-bold'>Trust 
                    <br />
                    
                    Strong
                </h1>
                <h4 className='fw-bold pt-2'>Expertise with care and empathy.</h4>
                
            </div>
        </div>
        
    );
};

export default Banner;

