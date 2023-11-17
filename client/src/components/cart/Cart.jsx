import { Box,Grid, Typography ,styled,Button} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { UseSelector, useSelector } from "react-redux";
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";

const Container = styled(Grid)(({theme})=>({
    padding:'30px 13px',
    [theme.breakpoints.down('md')]:{
    padding:'15px 0px'
}
}))

const Header = styled(Box)`
    padding:15px 24px;
    background:#F2F2F2;
`;
const ButtonWrapper = styled(Box)`
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    color: #fff;
    border-radius: 2px;
    width: 250px;
    height: 51px;
`;
const LeftComponent=styled(Grid)(({theme})=>({
paddingRight:15,
[theme.breakpoints.down('md')]:{
    marginBottom:15
}
}))

const Cart = () => {
    const navigate = useNavigate();

    const buyNow = () => {
        navigate('/buyNow')
    }
    // importing the data inside cart(state) which is is REDUX DATABASE  
    const  {cartItems} = useSelector(state=>state.cart)
    return(
        <>
            {
                cartItems.length?
                <Container container>
                    <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                        <Header>
                            <Typography>My Cart ({cartItems.length})</Typography>
                        </Header>
                        {
                            cartItems.map(item=>(
                                // we have all data of product inside 'item'
                                // hence passing it as a prop
                                <CartItem item={item}/>
                            ))
                        }
                        <ButtonWrapper>
                            <StyledButton onClick={()=>buyNow()}>Place Order</StyledButton>
                        </ButtonWrapper>
                    </LeftComponent>              
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        {/* passing the data */}
                        <TotalView cartItems={cartItems}></TotalView>
                    </Grid>              
                </Container>              
            :<EmptyCart/>
            }
        </>
    )
}
export default Cart;