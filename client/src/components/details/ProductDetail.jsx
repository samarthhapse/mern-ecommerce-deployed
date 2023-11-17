import { Box,Table,TableCell,TableBody,TableRow,Typography,styled } from "@mui/material"
import {LocalOffer as Badge} from '@mui/icons-material';

const Smalltext=styled(Box)`
vertical-align:baseline;
& > p {
    font-size:14px;
    margin-top:10px;
}
`
const StyledBadge = styled(Badge)`
color:green;
margin-right:10px;
font-size:15px
`

const ProductDetail = ({product}) =>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const date =new Date (new Date().getTime()+(5*24*60*60*1000))
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    return(
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{marginTop:5,color:'#878787',fontsize:14}}>8 ratings & 2 review
            <Box component='span'><img src={fassured} style={{ width:77, marginLeft:20 }} alt="" /></Box>
            </Typography>
            <Typography>
                <Box component='span' style={{ fontsize:28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{ color: '#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;
                <Box component='span' style={{ color:'#388E3C' }}>{product.price.discount}</Box>
            </Typography>
            <Typography>Available offers</Typography>
            <Smalltext>
                <Typography><StyledBadge/>Bank Offer10% Instant Discount on SBI Credit Card Txns, up to ₹1500, on orders of ₹5,000 and aboveT&C</Typography>
                <Typography><StyledBadge/>Bank Offer10% Instant Discount on SBI Credit Card EMI Txns, up to ₹1750, on orders of ₹5,000 and aboveT&C</Typography>
                <Typography><StyledBadge/>Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹20,000*Know More</Typography>
                <Typography><StyledBadge/>Special PriceGet extra 18% off (price inclusive of cashback/coupon)T&C</Typography>
                <Typography><StyledBadge/>Buy for 100 get ₹200 off your Next BuyT&C</Typography>
                <Typography><StyledBadge/>Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</Typography>
            </Smalltext>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                        <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                        <TableCell>No warranty</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:'#878787'}}>Seller</TableCell>
                        <TableCell style={{color:'#2874f0'}}>
                            <Box component="span" style={{color:'#2874f0'}}>SuperComNet</Box>
                            <Typography>GST inovice available</Typography>
                            <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{width:390}}alt="" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:'#878787'}}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}
export default ProductDetail