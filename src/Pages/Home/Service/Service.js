import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Service.css'

const Service = ({service}) => {
    const {id, img, title, description} = service;
    return (
        <div>
            {
                id===2 
                ?
                    <div className='d-flex card-design' >
                        <img src={img} alt="" className='w-50' />
                        <div className='p-5'>
                            <h3>{title}</h3>
                            <p className='text-secondary '>{description}</p>
                            <Button variant="outline-secondary">Click here</Button>
                        </div>
                    </div>
                :
                    <div className='d-flex card-design' >
                        <div className='p-5'>
                            <h3>{title}</h3>
                            <p className='text-secondary '>{description}</p>
                            <Button variant="outline-secondary">Click here</Button>
                        </div>
                        <img src={img} alt="" className='w-50' />
                </div>
            }
            
        </div>
    );
};

export default Service;