import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addToCart,buy} from '../../redux/actions/cartActions'
import { useState } from "react";
import { Box,Button,Typography,styled } from "@mui/material";
import {ShoppingCart as Cart,FlashOn as Flash} from '@mui/icons-material';
import { payUsingPaytm } from "../../service/api";
import {post} from '../../utils.js/paytm'
const URL='';
const LeftContainer=styled(Box)`
min-width:40%;
padding:30px 0 0 50px
`
const Image=styled('img')({
    width:'130%'
})
const StyledButton=styled(Button)(({theme})=>({
    width:'48%',
    height:50,
    borderRadius:2,
    [theme.breakpoints.down('lg')]:{
        width:'46%'
    },
    [theme.breakpoints.down('sm')]:{
        width:'45%'
    }

}))
    
const ActionItem = ({product}) =>{

    // call the route onClick of Add to cart Button webpage of add to cart will be opened
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [quantity,setQuantity] = useState(1);
    const {id} = product;

    const addItemToCart = () => {
        // this is function inside ActionItems (it will help to fetch the data of selected product)
        // then further it will go into cartReducer.js then data will be added in reducer
        dispatch(addToCart(id,quantity));
        // to navigate the page onclick od add to cart button
        // see that function it takes two values
        navigate('/cart')
    }
    const buyNow = () => {
        // this is function inside ActionItems (it will help to fetch the data of selected product)
        // then further it will go into cartReducer.js then data will be added in reducer
        // dispatch(buy(id,quantity));
        // to navigate the page onclick od add to cart button
        // see that function it takes two values
        navigate('/buyNow')
    }
  
    // const buyNow = async() => {
    //     // this function 'payUsingPaytm' will return some value in response
    //     let response = await payUsingPaytm({amount:500,email:'sama123@ReportGmailerrorred.com'})
    //     // making a form of paytm
    //     let information = {
    //         action:'https://securegw-stage.paytm.in/order/process',
    //         params:response
    //     }
    //     // passing the value in the for (src/utils/paytm.js)
    //     post(information)
    // }

    return(
        <LeftContainer>
            <Box style={{ padding:'5px 0px',border:'1px solid #f0f0f0', width:'70%'}}>
                <Image src={product.url} alt="" />
            </Box>
            <StyledButton variant="contained" onClick={()=>addItemToCart()} style={{marginRight:10, background:'#ff9f00'}}><Cart/>Add to cart</StyledButton>
            <StyledButton variant="contained" onClick={()=>buyNow()} style={{background:'#fb541b'}} ><Flash/>Buy now
            </StyledButton>
            {/* added */}
            {/* <StyledButton variant="contained" href={`${URL}/pay`} style={{background:'#fb541b'}} ><Flash/>Buy now </StyledButton> */}
        </LeftContainer>
    );
}
export default ActionItem
