import React from 'react';
import ProductList from '../components/productList';
import Carousel from '../components/Crouser';
import axios from 'axios'
import Bestselling from '../components/Bestselling';
let url = 'https://mock-json-server234.onrender.com/Toys'
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
            <br/>
            <hr/>
            <Carousel/>
           <ProductList products={data}/> 
           {/* <Bestselling/> */}
        </div>
    );
}

export default Dashboard;
