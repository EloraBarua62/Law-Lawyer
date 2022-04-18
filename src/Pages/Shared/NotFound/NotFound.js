import React from 'react';
import notfound from '../../../images/not-found.webp'

const NotFound = () => {
    return (
        <div className='d-flex justify-content-center'>
            <img style={{width:'600px' , height:'400px'}} src={notfound} alt="" />
        </div>
    );
};

export default NotFound;