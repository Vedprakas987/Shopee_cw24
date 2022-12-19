import React from 'react';
import ProductList from '../components/productList';
import Carousel from '../components/Crouser';
import Bestselling from '../components/Bestselling';
import { Center, Heading } from '@chakra-ui/react';
const Dashboard = () => {
    let url = 'https://mock-server-365.onrender.com/api/data'
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
            <Center mb={"20px"} mt={"20px"}>
                <Heading padding={"5px"} borderRadius={'10px'} color={'Black'}>New for You</Heading>
                </Center>
            <Bestselling products={data.electronics}/>
            <Center mb={"20px"} mt={"20px"}>
                <Heading padding={"5px"} borderRadius={'10px'} color={'Black'}>Best Seller</Heading>
                </Center>
           <ProductList products={data.Toys} v1={4} v2={/> 
           <Bestselling products={data.Recom}/>

        
        </div>
    );
}

export default Dashboard;
