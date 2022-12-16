import React from 'react';
let url = 'http://localhost:3001/api/electronics'
const Dashboard = () => {
    const [data,setdata] =React.useState([])
    const getdata=()=>{
        fetch(url)
    }
    return (
        <div>
            
        </div>
    );
}

export default Dashboard;
