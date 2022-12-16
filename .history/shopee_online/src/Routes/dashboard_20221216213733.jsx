import React from 'react';
import ProductList from '../components/productList';
import 
let url = 'http://localhost:3011/api/electronics'
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
           <ProductList products={data}/> 
        </div>
    );
}

export default Dashboard;