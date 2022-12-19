import React from 'react';
import { useParams } from 'react-router-dom';

const Productdetail = () => {
    const {id} = useParams()
    console.log(id)
    let url = `https://mock-json-server754.onrender.com/api/${data.electronics}`
    const [data,setdata] =React.useState({})
    const getdata=()=>{
        fetch(url).then((res)=>(res.json())).then((res)=>setdata(res))
    }
    React.useEffect(()=>{
     getdata()
    },[])
    return (
        <div>
            <h1>hello</h1>
        </div>
    );
}

export default Productdetail;
