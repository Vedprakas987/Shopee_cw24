import React from 'react';
import { useParams } from 'react-router-dom';

const Productdetail = () => {
    const {id} = useParams()
    console.log(id)
    let url = `https://mock-server-4262.onrender.com/api/electronics?id=${id}`
    const [data,setdata] =React.useState({})
    const getdata=()=>{
        fetch(url).then((res)=>(res.json())).then((res)=>setdata(res[0])
        )
    }
    React.useEffect(()=>{
     getdata()
    },[])
   console.log(data)
    return (
        <div>

            <h1>hello</h1>
        </div>
    );
}
https://mock-server-4262.onrender.com
export default Productdetail;
