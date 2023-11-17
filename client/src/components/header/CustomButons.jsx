// using useState(hook of react) to link a LoginDialog with login button
import { useState,useContext} from 'react';
import { DataContext } from '../../context/DataProvider';
import LoginDialog from "../login/LoginDialog";
import { Box,Button,Typography,styled,Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Profilo from './Profile';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
const Wrap=styled(Box)(({theme})=>({
    display:'flex',
    margin:'0 3% 0 auto',
    '& > *':{
        marginRight:'40px |important',
        fontSize:16,
        alignItems:'center'
    },
    // for responsiveness(MenuButton)
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}))
// const Container=styled(Box)`
// display:flex;
// `;
const Container=styled(Link)(({theme})=>({
    display:'flex',
    textDecoration:'none',
    color:'inherit',
    // for responsiveness(MenuButton)
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}))
const LoginButton=styled(Button)`
color:#2874f0;
background:#ffffff;
text-transform:none;
padding: 5px 30px;
box-shadow:none;
font-weight:600;
height:32px;
`;

const CustomButtons=()=>{
    // on clicking the login button passing true in useState 'open'
    // now as open becomes true for clicking event now passing it as a prop 
    // to keep dialog closed initially
    const[open,setOpen]=useState(false);

    // using useSelector to import data from REDUX DATABASE
    const {cartItems} = useSelector(state=>state.cart)

    // here we have imported the data of name
    const {account,setAccount}=useContext(DataContext);

    // to open dialog on calling openDialog()
    const openDialog=()=>{
        setOpen(true);
    }

    return(
        <Wrap>
            {/* we don't have to display login button simply , we have to display username on the place of ligin button when user will sign up */}
            {/* now we have to create two conditions,if user signs up we will have that data inside {account} because we have inserted that cotext from DataContext*/}
            {/* condition = if (there is any value in account then display value)
                            else( diaplay login button )  */}
            {
                account ? <Profilo account={account} setAccount={setAccount}/>:
                <LoginButton style={{marginRight:50}} variant="contained" onClick={()=>openDialog()}>Login</LoginButton>
            }
            <Typography style={{marginTop:3.5,marginRight:40,width:135}}>Become a Seller</Typography>
            <Typography style={{marginTop:3,marginRight:30}}>More</Typography>
            <Container to = {'/cart'}>
                {/* to import only component use self closing tags*/}
                {/* here ? is important , it checks if cart is empty, if we will not add and cart is empty APP could BREAK */}
                <Badge badgeContent={cartItems?.length} color='secondary'>
                    <ShoppingCartIcon/>
                </Badge>
                <Typography>
                cart
                </Typography>
            </Container>
            {/* passing open,setOpen as a prop */}
            <LoginDialog open={open} setOpen={setOpen}/>
       </Wrap>
    );
}
export default CustomButtons;