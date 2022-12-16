import React from 'react';
import ProductList from '../components/productList';
import Carousel from '../components/Crouser';
import { Container } from '@chakra-ui/react';
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
            <Container w="" bg="white">
            <br/>
            <hr/>
            <Carousel/>
           <ProductList products={data}/> 
           </Container>
        </div>
    );
}

export default Dashboard;