import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import React,{useEffect} from 'react';
import Bestsellingcard from './Bestsellingcars';
const Bestselling=() => {
    let url = 'http://localhost:3027/api/Toys'
     const [products,setproducts] = React.useState([])
     const getdata=()=>{
        fetch(url).then((res)=>(res.json())).then(
            (res)=>setproducts(res)
        )
     }
     useEffect(() => {
      getdata()
     }, []);
     console.log(products)
  return (
 products.map((el)=>(
    <Bestsellingcard {...el/>
 ))
  );
};
export default Bestselling;