import React from 'react';
import ProductList from '../components/productList';
import Carousel from '../components/Crouser';
import Bestselling from '../components/Bestselling';
let url = 'http://localhost:5000/api/data'
const Dashboard = () => {
    const [data,setdata] =React.useState({})
    const getdata=()=>{
        fetch(url).then((res)=>(res.json())).then((res)=>setdata(res))
    }
    React.useEffect(()=>{
     getdata()
    },[])
    console.log(data.electronics,data.New)
    return (
      
        <div>
            <br/>
            <hr/>
            <Carousel/>
           <ProductList products={data.electronics}/> 
           <Bestselling products={data.New}/>
        </div>
    );
}

export default Dashboard;
