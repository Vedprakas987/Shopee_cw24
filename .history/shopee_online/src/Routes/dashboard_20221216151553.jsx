import React from 'react';
let url = 'http://localhost:3001/api/electronics'
const Dashboard = () => {
    const [data,setdata] =React.useState([])
    const getdata=()=>{
        fetch(url).then((res)=>(res.json()))
    }
    return (
        <div>
            
        </div>
    );
}

export default Dashboard;