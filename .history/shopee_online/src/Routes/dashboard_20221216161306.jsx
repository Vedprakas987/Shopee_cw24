import React from 'react';
import Pr
let url = 'http://localhost:3008/api/electronics'
const Dashboard = () => {
    const [data,setdata] =React.useState([])
    const getdata=()=>{
        fetch(url).then((res)=>(res.json())).then((res)=>setdata(res))
    }
    React.useEffect(()=>{
     getdata()
    },[])
    console.log(data)
    return (
        <div>
            
        </div>
    );
}

export default Dashboard;
