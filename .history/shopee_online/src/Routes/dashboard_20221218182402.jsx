import React from 'react';
import ProductList from '../components/productList';
import Carousel from '../components/Crouser';
import axios from 'axios'
import Bestselling from '../components/Bestselling';
let url = 'http://localhost:3002/api/Toys'
const Dashboard = () => {
    const [data,setdata] =React.useState([])
    const getdata=()=>{
      axios.get()
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
