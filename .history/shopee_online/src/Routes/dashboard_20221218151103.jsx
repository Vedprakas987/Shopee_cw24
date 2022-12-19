import React from 'react';
import ProductList from '../components/productList';
import Carousel from '../components/Crouser';
let url = 'http://localhost:3026/api/data'
const Dashboard = () => {
    const [data,setdata] =React.useState({})
    const getdata=()=>{
        fetch(url).then((res)=>(res.json())).then((res)=>setdata(res))
    }
    React.useEffect(()=>{
     getdata()
    },[])
    console.log(data.electronics)
    return (
      
        <div>
            <br/>
            <hr/>
            <Carousel/>
           <ProductList products={data.electronics}/> 
        </div>
    );
}

export default Dashboard;
