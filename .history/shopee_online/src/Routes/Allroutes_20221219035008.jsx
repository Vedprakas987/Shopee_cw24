import React from 'react';
import {Routes,Route} from "react-router-dom";
import Dashboard from './dashboard';
const Allroutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/product/:id' element={<Product}
            </Routes>
        </div>
    );
}

export default Allroutes;
