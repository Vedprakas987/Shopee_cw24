import React from 'react';
import ProductList from '../components/productList';
import Carousel from '../components/Crouser';
import Bestselling from '../components/Bestselling';
import { Center, Heading } from '@chakra-ui/react';
const Dashboard = () => {
    const cards = [
        'https://img.gkbcdn.com/c/2211/NoneNPADAir101inchTabletPC1210x220-63631df22b40c92ed87f459c._p1_.jpg',
        'https://img.gkbcdn.com/c/2207/BMAXMaxBookX15ComputersTabletsAccessoriesBanner-62cf7dcb2b40c92a34ece4ac._p1_.jpg',
        'https://www.reliancedigital.in/medias/iPad-Pro-CLP-Banner-Available-now-27-10-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDgwOTZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDQxL2hmMS85OTEzNjU2ODAzMzU4LmpwZ3xhYTZkOTY2ZGMzM2VkMjYxNjIxMGZkNDY5MTg4MzY3NTQwYzk5MjU3YjFlYjEyNjA2Y2FmMjljOTlhNmFjZmZj',
       'https://www.reliancedigital.in/medias/iPad-10th-Gen-CLP-Banner-Available-now-27-10-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDc3ODl8aW1hZ2UvanBlZ3xpbWFnZXMvaGNkL2gyOS85OTEzNjU2NjcyMjg2LmpwZ3w3YmNlOGFmMmE3YzJhNjFlOWEzMTRjY2RkYmQ3NjYzYTVmODJhMDVjODRlNjc5Y2YzOGE5OWU0NGQwMGFlOGZi' ,
    'https://www.reliancedigital.in/medias/Mobile-Acc-Campaign-Page-banner.jpg?context=bWFzdGVyfGltYWdlc3w5NTU2NHxpbWFnZS9qcGVnfGltYWdlcy9oM2MvaGM2Lzk1NDM1MTE3NjkxMTguanBnfGNjOTgzNzk3N2I0MWViODQ1ZWQxNjhkMzQ4Y2YwMTM0ZWVjM2QxNTU2N2Y2MzEyMzdlYzhjNDc3N2EwNTEwZmM',
    'https://img.gkbcdn.com/s3/c/2210/H96MAXV58Android12TVBox1210220-6355fa182b40c95f985da277.jpg',
    'https://img.gkbcdn.com/s3/c/2209/ELEGLIDECITYCROSSER2-6332a2842b40c9222ca61686.jpg',
    'https://img.gkbcdn.com/c/2211/SYL08-637303e52b40c92e9c3090ab._p1_.jpg',
    'https://img.gkbcdn.com/c/2212/ienyrid-638d97372b40c93c74f6fe0e._p1_.jpg'
    
      ]
      const card2=[
        'https://img.gkbcdn.com/bn/2205/1500x2602-628f67e92b40c91f8ca376f9._p1_.jpg',
        'https://img.gkbcdn.com/bn/2205/1500x260-628f67db2b40c91f8ca376f8._p1_.jpg',
        'https://img.gkbcdn.com/bn/2205/1500x2603-628f67f02b40c91f8ca376fa._p1_.jpg'
      ]
    let url = 'https://mock-json-server754.onrender.com/api/data'
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
            <Carousel cards={cards}/>
            <Center mb={"20px"} mt={"20px"}>
                <Heading padding={"5px"} borderRadius={'10px'} color={'Black'}>New for You</Heading>
                </Center>
            <Bestselling products={data.electronics} v1={4} v2={2} v3={2} v4={2}/>
            <Center mb={"20px"} mt={"20px"}>
                <Heading padding={"5px"} borderRadius={'10px'} color={'Black'}>Best Seller</Heading>
                </Center>
                <Crou
           <ProductList products={data.Toys} /> 
           <Center mb={"20px"} mt={"20px"}>
                <Heading padding={"5px"} borderRadius={'10px'} color={'Black'}>Recommended for You</Heading>
                </Center>
           <Bestselling products={data.Recom}  v1={6} v2={3} v3={3} v4={2} v5={1}/>
          
        
        </div>
    );
}

export default Dashboard;
