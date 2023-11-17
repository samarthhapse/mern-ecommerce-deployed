// for carousel implementation take help from site 'https://www.npmjs.com/package/react-multi-carousel'
// to use carousel we need to install it externally
// import crousel from installed liabrary
import Carousel from 'react-multi-carousel'
// importing carousel css to style images
import 'react-multi-carousel/lib/styles.css';
import { bannerData } from '../../constants/data';
import { styled } from '@mui/material';

// to make it responsive => hence using themes and breakpoints
const Image=styled('img')(({theme})=>({
  width:'100%',
  height:200,
  [theme.breakpoints.down('md')]:{
    objectFit:'cover',
    height:100,
  }
}));

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Banner=()=>{
 return(
    // props are propertis in react
    // passing ht e responsive as a prop
    // all the props that give error can be added here ,take reference of 'https://www.npmjs.com/package/react-multi-carousel'
    <Carousel
    responsive={responsive}
    autoPlay={true}
    autoPlaySpeed={1000}
    swipeable={false}
    draggable={false}
    showDots={false}
    infinite={true}
    containerClass="carousel-container"
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px">
    {
        bannerData.map(data=>(
            <Image src={data.url} alt="banner" />
        ))
    }
    </Carousel>
 );
}
export default Banner;