import React from 'react';
import { Form, useParams } from 'react-router-dom';
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
    <Image src={data.image}/>
    <Text>'Price₹{data.price}</Text>
    <Text fontWeight="bold">{data.title}</Text>
    </VStack>

</Stack>
        </Container>
    );
}
export default Productdetail;
