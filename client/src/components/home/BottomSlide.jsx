import { Box,styled } from "@mui/material";
// import Slide from "./Slide";
import Flyer from "./Flyer";
// object destructuring
// if we are using objects in any function , which objects are actually passed form any another function

const Component=styled(Box)`
display:flex;
`
const LeftComponent=styled(Box)(({theme})=>({
    width:'79%',
    [theme.breakpoints.down('md')]:{
        width:'100%',
    }
}));
// for small screens we will only display items not advertisement
// to make it responsive => hence using themes and breakpoints
const RightComponent=styled(Box)(({theme})=>({
    background:'#FFFFFF',
    padding:5,
    marginTop:18,
    width:'35%',
    marginLeft:10,
    marginRight:30,
    textAlign:'center',
    [theme.breakpoints.down('md')]:{
        display:'none',
    }
}));
const BottomSlide=({productsfour,title,timer})=>{
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return(
        <Component>
            {/* In sllide we want NORMAL SLIDE + ADVERTISEMENT */}
            <LeftComponent>
                {/* NORMAL SLIDE */}
                {/* now we wil just forward the props of midslide to slide */}
                {/* because we want slide as it is */}
                {/* this will go in Slide.jsx and slide will be created */}
                <Flyer
                    products={productsfour}
                    title={title}
                    timer={timer}
                />
            </LeftComponent>
            <RightComponent>
                {/* ADVERTISEMENT */}
                <img src={adURL} alt="advertisement" width={245}/>
            </RightComponent>
        </Component>
    )
}
export default BottomSlide;