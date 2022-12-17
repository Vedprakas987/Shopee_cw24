import React from 'react';
import { Box, IconButton, useBreakpointValue,Image} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

 function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(<Slider/>);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '55%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
'https://content1.geekbuying.com/V1.4/en/promotion/20220322/image/consumer/ban1.jpg?v=1',
'https://www.reliancedigital.in/medias/JBL-Headphone-CLP-Banner-27-07-2022.jpg?
'https://www.reliancedigital.in/medias/Apple-AirPods-Max-CLP-Banner-01-08-2022.jpg?context=bWFzdGVyfGltYWdlc3w1NDIwOXxpbWFnZS9qcGVnfGltYWdlcy9oYzkvaDk1Lzk4NjkzODU4NTkxMDIuanBnfDFjMWFhZDIwNmEyODQ4NDM0OTYwODkxZjUyZTg5Y2FhYjU3OWJjMTk4ZTVhZTk3YTNmMjFiYzc2ZGJmYTc0MDQ'
, 
  ];

  return (
    <Box
      position={'relative'}
      height={'400px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Image w="30%" h="100%" src={url} alt="prof"/>
        ))}
      </Slider>
    </Box>
  );
}
export default Carousel