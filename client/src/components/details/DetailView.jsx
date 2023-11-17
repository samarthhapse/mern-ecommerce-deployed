// we want to display product details as we click on it
// we have to call REDUX DATABASE from here
// we want call immediately as page routes
// use the hook useEffect
import { useEffect } from "react";
// use the hook useDispatch to disPatch the data from REDUX database
//  usehook 'useSelector' is used to extract the values 
import { useDispatch,useSelector } from "react-redux";
// to copy the product id from URL 
// use the hook useParams
import { useParams } from "react-router-dom";

import { getProductDetails } from "../../redux/actions/productActions";
import { Box,Typography,styled,Grid } from "@mui/material";
// file for image of product
import ActionItem from "./ActionItem";
// file to display details of product
import ProductDetail from "./ProductDetail";
const Component=styled(Box)`
background:#F2F2F2;
margin-top:55px;
`
const Container=styled(Grid)`
background:#FFFFFF;
display:flex;
`
const RightContainer=styled(Grid)`
margin-top:50px;
`

const DetailView=()=>{
    // const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

    const dispatch=useDispatch();
    // object destructuring method = extracting a specific value from the object
    const { id } = useParams();
// exract loading , product from the getProductDetails object
// this object is inside reduc database
// FIRST ROW DETAILS
    const {loading,product} = useSelector(state=>state.getProductDetails)
    useEffect(()=>{
        // this is the fuction inside => src/redux/actions/productActions.js
        // pass the id of the selected product
        if(product && id !== product.id)
        dispatch(getProductDetails(id))
    },[dispatch,id,loading,product])
    console.log(product);

    return(
        <Component>
            {
                // display only if object 'product' is not empty
                product && Object.keys(product).length &&
                <Container container>
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        {/* pass the product as a prop */}
                        <ActionItem product={product}/>
                    </Grid>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        {/* <Typography>{product.title.longTitle}</Typography>
                        <Typography style={{marginTop:5,color:'#878787',fontsize:14}}>8 ratings & 2 review
                        <Box component='span'><img src={fassured} style={{ width:77, marginLeft:20 }} alt="" /></Box>
                        </Typography>
                        <Typography>
                            <Box component='span' style={{ fontsize:28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                            <Box component='span' style={{ color: '#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;
                            <Box component='span' style={{ color:'#388E3C' }}>{product.price.discount}</Box>
                        </Typography> */}
                        <ProductDetail product={product}/>
                    </RightContainer>
                </Container>
            }
        </Component>
    );
}
export default DetailView