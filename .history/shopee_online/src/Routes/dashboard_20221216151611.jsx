import React from 'react';
let url = 'http://localhost:3001/api/electronics'
const Dashboard = () => {
    const [data,setdata] =React.useState([])
    const getdata=()=>{
        fetch(url).then((res)=>(res.json())).then((res)=>setdata(res))
    }
    return (
        <div>
            
        </div>
    );
}

export default Dashboard;
