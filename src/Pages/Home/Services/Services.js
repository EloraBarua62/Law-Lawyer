import React from 'react';
import criminal from '../../../images/criminal.jpg'
import bankruptcy from '../../../images/bankruptcy.jpg'
import family from '../../../images/family.jpg'
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const services = [
        {
            id:1 , 
            title:'Criminal Defence' ,
            description:'Having financial difficulties and are contemplating bankruptcy proceedings?' ,
            img:criminal},
        {
            id:2 , 
            title:'Bankruptcy' , 
            description:'Consult about bail, arraignment, arrest, pleas and related issues',
            img:bankruptcy},
        {
            id:3 , 
            title:'Family' , 
            description: 'prenuptial agreement, engaged in divorce proceedings or involved in a child custody or spousal support battle',
            img:family}
    ];
    return (
        <div id="services" className='container services-design'>
            <h1 className='fw-bolder text-secondary'>I Provide</h1>
            <div className='bg-secondary' style={{height:'2px'}}></div>
            <div className='fw-bolder text-secondary'>
                {
                    services.map(service =>
                        <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                }
            </div>
            
        </div>
    );
};

export default Services;