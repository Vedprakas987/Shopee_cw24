import React from 'react';
import {Routes,Route} from "react-router-dom";
import Productdetail from '../components/Productdetail';
import Dashboard from './dashboard';
import Login from "./login" 
import Register from 
const Allroutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/product/:id' element={<Productdetail/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </div>
    );
}

export default Allroutes;
