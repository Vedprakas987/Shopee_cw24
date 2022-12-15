import React from 'react';
import Home from './Home';
import {Routes,Route} from "react-router-dom"
const Allroutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
            
        </div>
    );
}

export default Allroutes;
