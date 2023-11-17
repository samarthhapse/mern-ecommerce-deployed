//************************************OLD**************************************************
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { Box, Typography,Divider,Button } from "@mui/material";
import {Link} from "react-router-dom";
import styled from "@emotion/styled";
import Countdown from 'react-countdown';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Component =styled(Box)`
background:#FFFFFF;
margin-top:20px;
`
const Deal =styled(Box)`
padding:15px 20px;
display:flex;
`
const Timer =styled(Box)`
display:flex;
margin-left:10px;
align-items:center;
color:7f7f7f;
`
const Dealtext =styled(Typography)`
font-size:22px;
font-weight:600;
margin-right:25px;
line-height:32px;
`
const ViewAllButton=styled(Button)`
margin-left:auto;
background:#2874f0;
font-size:13px;
font-weight:600;
`
const Image=styled('img')({
width:'auto',
height:150
})
const Text=styled(Typography)`
font-size:14px;
margin-top:5px;
`

const Flyer=({products,title,timer})=>{
const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

const renderer = ({ hours, minutes, seconds }) => {
    return <Timer variant="span">{hours} : {minutes} : {seconds}  Left</Timer>;
};
    return(
      <Component>
          <Deal>
            <Dealtext>{title}</Dealtext>
            {
              timer&& //run only if tier prop is true
                <Timer>
                  <img src={timerURL} alt="timer" style={{width:24}}/>
                  <Countdown date={Date.now() + 5.04e+7} renderer={renderer}></Countdown>
                </Timer>
            }
            <ViewAllButton variant="contained" color="primary">View all</ViewAllButton>
          </Deal>
          <Divider/>
          <Carousel
          // passing the props(restrictions) for carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          autoPlaySpeed={1000}
          swipeable={false}
          draggable={false}
          keyBoardControl={true}
          centerMode={true}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
  >

              {
                  products.map(product=>(
                  // to route the product when cliked on it
                  <Link to={`product/${product.id}`} style={{textDecoration:'none'}}>
                    <Box textAlign="center" style={{padding:'25px 15px'}}>
                      {/* import the data from objects redux database*/}
                      <Image src={product.url} alt="product" />
                      <Typography style={{fontWeight:600 , color:'212121'}}>{product.title.shortTitle}</Typography>
                      <Typography style={{color:'green'}}>{product.discount}</Typography>
                      <Typography style={{color:'212121',opacity:0.6}}>{product.tagline}</Typography>
                    </Box>
                  </Link>  
                  ))
              }
        
          </Carousel>
      </Component>
    )
}
// const Flyer = (props) => {
//   return (
//       <>
//           {
//               props.multi === true && <Fly {...props} />
//           }
//       </>
//   )
// }

export default Flyer;