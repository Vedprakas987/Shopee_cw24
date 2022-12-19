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
  const top = useBreakpointValue({ base: '90%', md: '45%' });
  const side = useBreakpointValue({ base: '30%', md: '55px' });

  // These are the images used in the slide
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

  ];

  return (
    <Box
      position={'relative'}
      height={'190px'}
      width={'90%'}
      overflow={'hidden'}
      margin={'auto'}
      >
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
          <Image w="30%" h="50%" src={url} alt="prof"/>
        ))}
      </Slider>
    </Box>
  );
}
export default Carousel