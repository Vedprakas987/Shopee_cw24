import React from 'react';
import {Routes,Route} from "react-router-dom";
import Productdetail from '../components/Productdetail';
import Dashboard from './dashboard';
const Allroutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/product/:id' element={<Productdetail/>}/>
                <Route path=''
            </Routes>
        </div>
    );
}

export default Allroutes;
