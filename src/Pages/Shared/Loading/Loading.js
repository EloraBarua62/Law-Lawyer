import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ height: '300px' }} className='w-100 d-flex justify-content-center align-items-center'>
            <Spinner style={{width:'200px' ,height:'200px'}} animation="border" variant="secondary" />
        </div>
    );
};

export default Loading;