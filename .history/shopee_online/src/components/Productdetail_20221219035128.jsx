import React from 'react';
import { useParams } from 'react-router-dom';

const Productdetail = () => {
    const {id} = useParams()
    console.log(id)
    return (
        <div>
            <h1>hello</h1>
        </div>
    );
}

export default Productdetail;
