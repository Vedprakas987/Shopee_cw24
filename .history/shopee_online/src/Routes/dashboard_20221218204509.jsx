import React from 'react';
import ProductList from '../components/productList';
import Carousel from '../components/Crouser';
import Bestselling from '../components/Bestselling';
import { Center, Heading } from '@chakra-ui/react';
const Dashboard = () => {
    let url = 'https://mock-json-server233.onrender.com/api/data'
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
            <Center mb="" mt={"20px"}>
                <Heading padding={"5px"} borderRadius={'10px'} bg={'red'} color={'white'}>Best Selling</Heading>
                </Center>
            <Bestselling products={data.electronics}/>
           <ProductList/> 
        
        </div>
    );
}

export default Dashboard;
