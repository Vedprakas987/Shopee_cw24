import React from 'react';
import { Form, useParams } from 'react-router-dom';
import React from 'react';

import ReactDOM from 'react-dom';

import ReactImageZoom from 'react-image-zoom';

const props = {width: 400, height: 250, zoomWidth: 500, img: "1.jpg"}
import {Image,Stack,HStack,VStack,Heading,Button,Center,Box,Container,Text} from "@chakra-ui/react"
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
        <Container mt={20}>
            
<Stack>
   <VStack>
   <div class="img-zoom-container">
<Image id="myimage" src= width="300" height="240" alt="Girl"/>
<div id="myresult" class="img-zoom-result"></div>
</div>
    <HStack>
    <Text color="green">₹{data.price}</Text>
    <Text textDecoration={'line-through'}  color="red">₹{Math.floor(data.price*1.2)}</Text>
    </HStack>
  
    <Text fontWeight="bold">{data.title}</Text>
    <Button>Add to Cart</Button>
    </VStack>

</Stack>
        </Container>
    );
}
export default Productdetail;
