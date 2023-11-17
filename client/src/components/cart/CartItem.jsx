import { Box, Button,Typography, styled } from '@mui/material';
import {removeFromCart} from '../../redux/actions/cartActions'
import { useDispatch } from 'react-redux';
import ButtonGroup from './ButtonGroup';
const Component = styled(Box)`
    border-top: 1px solid #f0f0f0;
    border-radius: 0px;
    display: flex;

`;
const LeftComponent = styled(Box)`
    margin: 20px; 
    display: flex;
    flex-direction: column;
`;

const SmallText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;
`;

const Remove= styled(Button)`
    color: #000;
    font-size: 16px;
    font-weight: 600;
    margin-top: 20px;
`

const Cost = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
`;

const MRP = styled(Typography)`
    color: #878787;
`;

const Discount = styled(Typography)`
    color: #388E3C;
`;

const CartItem = ({ item }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const dispatch = useDispatch();

    const removeItemFromCart=(id)=>{
        dispatch(removeFromCart(id))
        {/* from here it will go in cartActions and remove the item */}
    }

    return (
        <Component>
            <LeftComponent>
                <img src={item.url} style={{ height: 110, width: 110 }} />
                <ButtonGroup/>
                {/* <GroupButton /> */}
            </LeftComponent>
            <Box style={{ margin: 20 }}>
                <Typography>{item.title.longTitle}</Typography>
                <SmallText>Seller:RetailNet
                    <span><img src={fassured} style={{ width: 50, marginLeft: 10 }} /></span>
                </SmallText>
                <Typography style={{margin: '20px 0'}}>
                    <Cost component="span">₹{item.price.cost}</Cost>&nbsp;&nbsp;&nbsp;
                    <MRP component="span"><strike>₹{item.price.mrp}</strike></MRP>&nbsp;&nbsp;&nbsp;
                    <Discount component="span">{item.price.discount} off</Discount>
                </Typography>
                <Remove onClick={()=>removeItemFromCart(item.id)}>Remove</Remove>
            </Box>
        </Component>
    )
}

export default CartItem;